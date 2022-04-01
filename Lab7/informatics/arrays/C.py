spisok = input().split()
cnt=0
for i in spisok:
    if int(i)>0: #сюда еще tab надо в начале строки
        cnt +=1 #сюда тоже tab

print(cnt)