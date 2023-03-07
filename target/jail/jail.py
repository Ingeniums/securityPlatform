#!/usr/bin/env python3
print(f"%s" % open(__file__).read())
code = input(">> ")

if " " in code:
    print("NO SPACES ALLOWED!!!!!!")
else:
    exec(code)
