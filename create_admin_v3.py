import subprocess
import os

os.chdir("D:\\Nevnev\\Panpan\\panel")

# Create a temporary file with the input
input_file = "user_input_proper.txt"
with open(input_file, "w") as f:
    f.write("yes\n")
    f.write("adminuser\n")
    f.write("admin@example.com\n")
    f.write("admin\n")
    f.write("user\n")
    f.write("Admin@123\n")
    f.write("Admin@123\n")

# Use the file as input
with open(input_file, "r") as f:
    result = subprocess.run(
        ["docker", "compose", "exec", "-T", "panel", "php", "artisan", "p:user:make"],
        stdin=f,
        capture_output=True,
        text=True,
        timeout=30
    )

print("STDOUT:", result.stdout)
print("STDERR:", result.stderr)
print("Return code:", result.returncode)