import unittest
import sys
from io import StringIO
from src.main import main

class TestMain(unittest.TestCase):
    def test_main_output(self):
        captured_output = StringIO()
        sys.stdout = captured_output
        main()
        sys.stdout = sys.__stdout__
        self.assertEqual(captured_output.getvalue(), "Hello, World!\n")

if __name__ == '__main__':
    unittest.main()
