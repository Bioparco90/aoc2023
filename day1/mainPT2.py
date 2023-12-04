from functools import reduce

text_numbers = {
    "one": "o1e",
    "two": "t2o",
    "three": "t3e",
    "four": "f4r",
    "five": "f5e",
    "six": "s6x",
    "seven": "s7n",
    "eight": "e8t",
    "nine": "n9e",
}

def substitute(str):
    for key, value in text_numbers.items():
        str = str.replace(key, value)
    return str


def find_numbers(line):
    numbers = [num for num in line if num.isdigit()]

    if not numbers:
        return 0
    
    return int(numbers[0] + numbers[-1])


with open("day1/input.txt", "r") as file:
    lines = file.readlines()

numbers = [find_numbers(substitute(line)) for line in lines]
result = reduce(lambda a, b: a + b, numbers)

print(result)
