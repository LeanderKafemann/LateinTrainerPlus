from naturalsize import listToInt, special_starter

print("Booting replacer v3.0.0 (modified for LTP mv1.0.1)")
print("replacer is part of Leander Kafemanns project bueroWebsite.")

path = "C:/Users/Leander/Documents/Python/LateinTrainerPlus/index.html"
with open(path, "r", encoding="utf-8") as f:
    content_org = f.read()
invalid = ["ß", "ü", "ö", "Ö", "ü", "ä", "Ä", "b&uuml;", " />"]
print("Targets found: "+str(listToInt([content_org.count(i) for i in invalid])))

content = content_org.replace("ß", "&szlig;",).replace("ü", "&uuml;").replace("ö", "&ouml;").replace("Ü", "&Uuml;").replace("Ö", "&Ouml;").replace("ä", "&auml;").replace("Ä", "&Auml;").replace("b&uuml;", "bü").replace(" />", "/>")
with open(path, "w", encoding="utf-8") as f:
    f.write(content)
print("Targets successfully replaced.")

special_starter()
