def KeysViewContains(key: str, keys):
    """
    Checks if the key exists in the KeysView.
    """
    for keyItem in keys:
        if keyItem == key:
            return True
    return False


def KeysViewNotContains(key: str, keys):
    """
    Checks if the key doesn't exist in the KeysView.
    """
    for keyItem in keys:
        if keyItem != key:
            return True
    return False
