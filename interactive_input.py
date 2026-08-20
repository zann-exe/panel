import subprocess
import sys

# Prepare the input for the interactive command
user_input = """yes
adminuser
admin@example.com
admin
user
Admin@123
Admin@123
"""

# Run the docker command with input
process = subprocess.Popen(
    ["docker", "compose", "exec", "-T", "panel", "php", "artisan", "p:user:make"],
    cwd="D:\\Nevnev\\Panpan\\panel",
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE,
    text=True
)

# Send the input
stdout, stderr = process.communicate(input=user_input)

print("STDOUT:", stdout)
print("STDERR:", stderr)
print("Return code:", process.returncode)