def KeysViewNotContains(key: str, keys: dict[str]):
    """
    Checks if the key doesn't exist in the KeysView.
    True for doesn't exist otherwise False.
    """
    exists = False
    for keyItem in keys:
        if keyItem == key:
            exists = True
            break
    return not exists
