@echo off
:: This batch file is used to build the project and run it.

echo Hello, %USERNAME%!
echo.

echo -------------------------------------------------------
echo.

:: Building the project...
echo Starting to build the project...
cd C:\Users\%USERNAME%\dev\github\archnet

echo.
dir
echo.

call yarn build
echo Your project is built!

echo.
echo Running your server...
call node server.js
echo.

echo.
echo -------------------------------------------------------
echo.

pause