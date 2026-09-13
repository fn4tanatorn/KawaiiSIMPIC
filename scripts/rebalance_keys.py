import re
import json

with open('src/data/questions/microbiologyQuestions.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern matching each question object
# It begins with { \n id: "SIMPIC-...
header = content[:content.find('export const microbiologyQuestions: Question[] = [')]
header += 'export const microbiologyQuestions: Question[] = [\n'

# Split questions
# We can find each block between { id: and the end of question object
# To be robust, let's parse using a parser that converts TS object to valid JSON or evaluates it
# In microbiologyQuestions.ts, the keys are unquoted or quoted.
# Let's inspect each question's correctIndex, options, rationales.

def rebalance_ts_content(raw_code):
    # Regex find all blocks
    # Each question has id, stem, options, correctIndex, rationales, etc.
    # Let's write a python script to process each question block
    pattern = re.compile(r'\{\s+id:\s*\"(SIMPIC-[^\"]+)\".*?\n\s+\}(?=,|\s+\])', re.DOTALL)
    matches = list(pattern.finditer(raw_code))
    print(f"Found {len(matches)} questions matching pattern")
    
    modified_code = raw_code
    # Process each match
    # Since string indices shift, process in reverse or collect replacements
    replacements = []
    
    for i, match in enumerate(matches):
        block = match.group(0)
        target_key = i % 5 # 0: A, 1: B, 2: C, 3: D, 4: E
        
        # Extract correctIndex
        ci_match = re.search(r'correctIndex:\s*(\d+)', block)
        if not ci_match:
            continue
        current_ci = int(ci_match.group(1))
        
        if current_ci == target_key:
            continue
            
        # Extract options array
        opts_match = re.search(r'options:\s*\[(.*?)\]', block, re.DOTALL)
        if not opts_match:
            continue
        raw_opts = opts_match.group(1)
        # Parse individual options (string literals)
        # Options are on lines: "..." or '...'
        opt_lines = [m.strip().strip('"').strip("'") for m in re.findall(r'\"([^\"]+)\"', raw_opts)]
        if len(opt_lines) != 5:
            # Maybe some options contain quotes or linebreaks, fallback to parsing
            print(f"Warning: Question {i} had {len(opt_lines)} options instead of 5")
            continue
            
        # Extract rationales dictionary: 0: "...", 1: "...", etc.
        rat_match = re.search(r'rationales:\s*\{(.*?)\}', block, re.DOTALL)
        if not rat_match:
            continue
        raw_rats = rat_match.group(1)
        # Find 0: "...", 1: "...", 2: "...", 3: "...", 4: "..."
        rat_dict = {}
        for r_idx in range(5):
            r_pattern = rf'{r_idx}:\s*\"(.*?)\"(?=,\s*\d+:|\s*$)'
            rm = re.search(r_pattern, raw_rats, re.DOTALL)
            if rm:
                rat_dict[r_idx] = rm.group(1)
            else:
                print(f"Warning: could not find rationale {r_idx} in question {i}")
                
        if len(rat_dict) != 5:
            print(f"Warning: rat_dict length {len(rat_dict)} for question {i}")
            continue
            
        # Swap options[current_ci] and options[target_key]
        opt_lines[current_ci], opt_lines[target_key] = opt_lines[target_key], opt_lines[current_ci]
        
        # Swap rationales[current_ci] and rationales[target_key]
        rat_dict[current_ci], rat_dict[target_key] = rat_dict[target_key], rat_dict[current_ci]
        
        # Reconstruct new options string
        new_opts_str = 'options: [\n' + ',\n'.join([f'      "{opt}"' for opt in opt_lines]) + '\n    ]'
        
        # Reconstruct new correctIndex
        new_ci_str = f'correctIndex: {target_key}'
        
        # Reconstruct new rationales string
        new_rat_str = 'rationales: {\n' + ',\n'.join([f'      {idx}: "{rat_dict[idx]}"' for idx in range(5)]) + '\n    }'
        
        # Replace inside block
        new_block = block
        new_block = re.sub(r'options:\s*\[.*?\]', new_opts_str, new_block, flags=re.DOTALL)
        new_block = re.sub(r'correctIndex:\s*\d+', new_ci_str, new_block)
        new_block = re.sub(r'rationales:\s*\{.*?\}', new_rat_str, new_block, flags=re.DOTALL)
        
        replacements.append((match.start(), match.end(), new_block))
        print(f"Question {i} ({ci_match.group(0)} -> {new_ci_str}) rebalanced to {'ABCDE'[target_key]}")

    # Apply replacements from end to beginning so offsets don't change
    for start, end, new_block in reversed(replacements):
        raw_code = raw_code[:start] + new_block + raw_code[end:]
        
    return raw_code

new_content = rebalance_ts_content(content)

with open('src/data/questions/microbiologyQuestions.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Rebalance script completed!")
