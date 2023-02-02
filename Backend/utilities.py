from django.shortcuts import get_object_or_404
from django.http import Http404

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

def fetch_object_or_404(model, **credentials):
    """
    Wrapper arround the django get_object_or_404
    where instead of raising an error when no object doensn't exist
    it just returns `False`.
    """
    try:
        row = get_object_or_404(model, username=credentials["username"])
        return row
    except (Http404):
        try:
            row = get_object_or_404(model, email=credentials["username"])
            return row
        except (Http404):
            return False
