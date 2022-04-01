def max_end3(nums):
    first = nums[0]
    last = nums[len(nums) - 1]
    maxnum = first
    if first >= last:
        maxnum = first
    elif first <= last:
        maxnum = last
    for i in range(len(nums)):
        nums[i] = maxnum
    return nums
