@echo off
:: This batch file is used to commit and push to development branch.

:: Setting the commit message.
set commitMessage=%1

echo Hello, %USERNAME%!
echo.

echo -------------------------------------------------------
echo.

:: Compiling server.ts
echo Pushing to development branch...
cd C:\Users\%USERNAME%\dev\github\archnet

echo.
dir
echo.

call git add .
call git status
call git commit -m %commitMessage%
call git push -u origin master
echo Git push completed to development branch!

echo.
echo -------------------------------------------------------
echo.

pause