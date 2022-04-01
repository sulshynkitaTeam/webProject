def make_chocolate(small, big, goal):
    big_bar = 5 * big

    if goal >= big_bar:
        rem = goal - big_bar
    else:
        rem = goal % 5

    if rem <= small:
        return rem

    return -1
