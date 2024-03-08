test1 = True

test2 = False

#* --------------------------------- not gates -------------------------------- #

def notGate(a):
    return True if not a else False

#* ---------------------------------- or gate --------------------------------- #

def orGate(a, b):
    return True if a or b else False

#* --------------------------------- and gate --------------------------------- #

def andGate(a, b):
    return True if a and b else False

#* --------------------------------- xor gate --------------------------------- #

def xorGate(a, b):
    return True if a != b else False

print(notGate(test1))
print(orGate(test1, test2))
print(andGate(test1, test2))
print(xorGate(test1, test2))