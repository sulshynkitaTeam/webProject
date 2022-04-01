if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    arr = sorted(arr, reverse = True)
    num = 0
    for i in range(len(arr)):
        if arr[i] > arr[i + 1] and i != len(arr):
            num = arr[i + 1]
            break

    print(num)
