if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    sum_of_marks = 0

    for i in student_marks[query_name]:
        sum_of_marks = sum_of_marks + i
    avg = sum_of_marks / 3

    print("%.2f"%avg)
