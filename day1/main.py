from functools import reduce

def find_numbers(line):
    numbers = [num for num in line if num.isdigit()]

    if not numbers:
        return 0
    
    return int(numbers[0] + numbers[-1])
    

# ----------------------------------------------
with open("day1/input.txt", "r") as file:
    lines = file.readlines()

numbers = [find_numbers(line) for line in lines]
result = reduce(lambda a, b:  a+b, numbers)
print(result)