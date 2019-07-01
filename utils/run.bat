@echo off
:: This batch file is used to run the project's server.

echo Hello, %USERNAME%!
echo.

echo -------------------------------------------------------
echo.

:: Running the server
echo Running the server...
cd C:\Users\%USERNAME%\dev\github\archnet

echo.
dir
echo.

echo Running your server...
call node server.js
echo.

echo.
echo -------------------------------------------------------
echo.

pause