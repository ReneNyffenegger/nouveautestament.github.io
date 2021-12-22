@echo off
cls


echo TRADUCTION
echo ==========


cd traduire
echo traduire
node make.js >> sebastien_fr.txt
move /Y sebastien_fr.txt ..\database\
cd..



echo INTERLINEAIRE
echo =============

cd interlineaire


cd hellene
echo hellene
node make
cd ..

cd francais
echo francais
node make
cd ..
cd technique
echo technique
node make
cd ..

cd ..


echo EDITION
echo =======


cd edition

cd el-fr
echo el-fr
node make
cd ..
cd francais
echo francais
node make
cd ..
cd sebastien-alain
echo sebastien-alain
node make
cd ..

cd ..

echo LEMME
echo =====

cd lemme

echo lemme
node make
cd ..