@echo off
:: This batch file is used to compile all the .ts files in one run.

echo Hello, %USERNAME%!
echo.

echo -------------------------------------------------------
echo.

:: Compiling server.ts
echo Compiling server...
cd C:\Users\%USERNAME%\dev\github\archnet

echo.
dir
echo.

call tsc server.ts
echo Your server is compiled!

echo.

:: Compiling all the routes.
echo Compiling routes...
cd C:\Users\%USERNAME%\dev\github\archnet\src\server\routes

echo.
dir
echo.

call tsc rootRoute.ts
echo Your routes are compiled!

echo.
echo -------------------------------------------------------
echo.

pause