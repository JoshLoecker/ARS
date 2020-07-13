import re

data = ['FAL03879_67a0761e_539', 'FAL03879_67a0761e_11', 'FAL03879_67a0761e_1275', 'FAL03879_67a0761e_1055', 'FAL03879_67a0761e_163', 'FAL03879_67a0761e_806']
pattern = r"""[0-9]{2,}$"""
for item in data:
    find = re.search(pattern, item)

search = [re.search("[0-9]+$", item).group() for item in data]

print(re.search("[0-9]{2,}$", "FAL03879_67a0761e_539").lastgroup)

for i in search:
    print(i)
