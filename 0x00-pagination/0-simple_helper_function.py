#!/usr/bin/env python3
"""
Contains definition of index_range helper function
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    This function takes two integer arguments and returns a tuple containing the start and end indexes for the given pagination parameters.

Args:
page (int): The page number to return (1-indexed).
page_size (int): The number of items per page.
Returns:
tuple: A tuple containing the start index and end index_index)
    """
    start, end = 0, 0
    for i in range(page):
        start = end
        end += page_size

    return (start, end)
