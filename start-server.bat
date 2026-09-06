@echo off
echo =========================================
echo  Precision Tune - Serveur Local
echo =========================================
echo.
echo Démarrage du serveur sur http://localhost:7100
echo.
echo Appuyez sur Ctrl+C puis Y pour arrêter
echo.
cd /d "%~dp0"
python3 -m http.server 7100
pause
