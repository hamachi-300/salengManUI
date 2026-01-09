import glob
import re

def standardize_topbar():
    files = glob.glob('*.html')
    print(f"Scanning {len(files)} HTML files for top bar standardization...")

    # Standard Top Bar (Based on index.html but with added background for safety)
    # Using absolute position, z-index 50 to be on top of everything
    # Added background colors to prevent transparency issues
    new_topbar = """<div class="absolute top-0 w-full h-12 flex justify-between items-center px-6 z-50 bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 text-sm font-medium">
    <span>9:41</span>
    <div class="flex gap-1.5 items-center">
    <span class="material-icons-round text-base">signal_cellular_alt</span>
    <span class="material-icons-round text-base">wifi</span>
    <span class="material-icons-round text-base">battery_full</span>
    </div>
    </div>"""

    for file_path in files:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 1. Locate "9:41"
        idx = content.find('9:41')
        if idx == -1:
            print(f"Skipping {file_path}: '9:41' not found.")
            continue

        # 2. Find the opening <div> for this container
        # We search backwards from idx for "<div"
        # We need to be careful not to skip into a previous sibling. 
        # The container should be the immediate parent of "9:41" or the text node "9:41" is inside a span which is inside the div.
        # In index.html: <div ...> \n <span>9:41</span>
        
        # Let's find the start of the line or nearest <div before it.
        # simpler approach: Find the last "<div" before "9:41".
        # Warning: This assumes "9:41" is the first significant content in that div.
        
        start_div = content.rfind('<div', 0, idx)
        if start_div == -1:
            print(f"Error parsing {file_path}: Could not find container.")
            continue

        # 3. Find the matching closing </div>
        # We scan forward from start_div tracking nesting
        nesting = 0
        end_div = -1
        
        # Scan char by char or tag by tag?
        # Simple char scan
        i = start_div
        while i < len(content):
            # Check for starts
            if content[i:].startswith('<div'):
                nesting += 1
                i += 4
            elif content[i:].startswith('</div>'):
                nesting -= 1
                if nesting == 0:
                    end_div = i + 6 # length of </div>
                    break
                i += 6
            else:
                i += 1
        
        if end_div != -1:
            old_block = content[start_div:end_div]
            
            # Additional check: Does this block imply it's the right one?
            if '9:41' in old_block:
                # Replace
                new_content = content[:start_div] + new_topbar + content[end_div:]
                
                # Check if we broke layout in Login pages (non-absolute replacement)
                # If the previous block was NOT absolute, and we made it absolute, we might need padding.
                # Heuristic: if file is login.html or similar, maybe check?
                # For now, let's just do the replacement as requested.
                
                if new_content != content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {file_path}")
            else:
                print(f"Warning {file_path}: Found block but '9:41' not inside? (Logic error)")
        else:
            print(f"Error {file_path}: Could not find closing div.")

if __name__ == "__main__":
    standardize_topbar()
