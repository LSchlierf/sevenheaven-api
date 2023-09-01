import json
import string

with open("Repertoire.txt", "r") as f:
    repertoire = f.readlines()
    # sort the list
    repertoire.sort()
    # remove duplicates
    repertoire = list(dict.fromkeys(repertoire))
    #initialize the dict for letter mapping
    letters = {}
    for i in string.ascii_uppercase:
        letters[i] = []
    letters["#"] = []
    # map the songs to the letters
    for song in repertoire:
        title = song.strip().split(" - ")[0]
        artist = song.strip().split(" - ")[1]
        letter = title[0].upper()
        if letter in string.ascii_uppercase:
            letters[letter].append({"title": title, "artist": artist})
        else:
            letters["#"].append({"title": title, "artist": artist})

    with open("Repertoire.json", "w") as r:
        json.dump([{"letter": letter, "songs": letters[letter]} for letter in letters], r, indent=4)