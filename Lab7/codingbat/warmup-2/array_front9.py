def array_front9(nums):
    is_nine = False
    for i in range(len(nums)):
        if nums[i] == 9 and i != 4:
            return True
    return False
