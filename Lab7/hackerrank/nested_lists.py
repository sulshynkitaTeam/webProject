if __name__ == '__main__':
    all_students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())

        all_students.append([name, score])

    second = sorted(set([score for name, score in all_students]))[1]
print('\n'.join(sorted([name for name, score in all_students if score == second])))
