import subprocess
import os

os.chdir("D:\\Nevnev\\Panpan\\panel")

# Create the command with explicit input using a different approach
cmd = [
    "docker", "compose", "exec", "-T", "panel", 
    "php", "artisan", "p:user:make"
]

# Input with proper line endings
user_input = "yes\nadminuser\nadmin@example.com\nadmin\nuser\nAdmin@123\nAdmin@123\n"

# Try using subprocess.run with explicit input
result = subprocess.run(
    cmd,
    input=user_input,
    capture_output=True,
    text=True,
    timeout=30
)

print("STDOUT:", result.stdout)
print("STDERR:", result.stderr)
print("Return code:", result.returncode)