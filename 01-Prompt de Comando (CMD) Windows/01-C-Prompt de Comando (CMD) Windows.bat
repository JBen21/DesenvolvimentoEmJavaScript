bash
@echo off

:: 1. Crie uma pasta chamada "projeto_inicial" na área de trabalho
mkdir "%USERPROFILE%\Desktop\projeto_inicial"

:: 2. Crie as subpastas dentro da pasta "projeto_inicial"
mkdir "%USERPROFILE%\Desktop\projeto_inicial\html"
mkdir "%USERPROFILE%\Desktop\projeto_inicial\css"
mkdir "%USERPROFILE%\Desktop\projeto_inicial\js"
mkdir "%USERPROFILE%\Desktop\projeto_inicial\assets"

:: 3. Verifique o caminho atual
cd "%USERPROFILE%\Desktop\projeto_inicial\html"
echo %cd%

:: 4. Crie o arquivo "index.html" dentro da pasta "html"
echo Bem-vindo ao Projeto Inicial. > index.html

:: 5. Crie o arquivo "style.css" dentro da pasta "css"
cd "%USERPROFILE%\Desktop\projeto_inicial\css"
echo body { font-family: Arial, sans-serif; background-color: beige} > style.css

:: 6. Crie as subpastas "img" e "fonts" dentro da pasta "assets"
cd "%USERPROFILE%\Desktop\projeto_inicial\assets"
mkdir img
mkdir fonts

:: 7. Mova o arquivo "style.css" para a pasta "assets"
move "%USERPROFILE%\Desktop\projeto_inicial\css\style.css" "%USERPROFILE%\Desktop\projeto_inicial\assets\"

:: 8. Liste os arquivos e subpastas dentro da pasta "assets"
cd "%USERPROFILE%\Desktop\projeto_inicial\assets"
dir

:: 9. Crie os arquivos "script.js" e "app.js" dentro da pasta "js"
cd "%USERPROFILE%\Desktop\projeto_inicial\js"
echo console.log("Script carregado!"); > script.js
echo console.log("Aplicação Iniciada!"); > app.js

:: 10. Faça uma cópia do arquivo "index.html" para a pasta "assets"
copy "%USERPROFILE%\Desktop\projeto_inicial\html\index.html" "%USERPROFILE%\Desktop\projeto_inicial\assets\"

:: 11. Renomeie o arquivo "app.js" para "main.js"
cd "%USERPROFILE%\Desktop\projeto_inicial\js"
rename app.js main.js

:: 12. Verifique a estrutura do projeto
cd "%USERPROFILE%\Desktop\projeto_inicial"
dir /s

:: 13. Navegue até a pasta "assets" e delete o arquivo "index.html"
cd "%USERPROFILE%\Desktop\projeto_inicial\assets"
del index.html

:: 14. Navegue até a pasta "html" e abra o arquivo "index.html" no notepad
cd "%USERPROFILE%\Desktop\projeto_inicial\html"
notepad index.html
