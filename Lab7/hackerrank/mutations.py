def mutate_string(string, position, character):
    mutate_list=list(string)
    mutate_list[position] = character
    return ''.join(mutate_list)
