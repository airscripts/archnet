@echo off
:: This batch file is used to build the project.

echo Hello, %USERNAME%!
echo.

echo -------------------------------------------------------
echo.

:: Building the project
echo Building the project...
cd C:\Users\%USERNAME%\dev\github\archnet

echo.
dir
echo.

call yarn build
echo Your project is built!

echo.
echo -------------------------------------------------------
echo.

pause