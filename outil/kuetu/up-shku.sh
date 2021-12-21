#grep -v :SHORA-KUETU database_fr.txt
sed -i '/:SHORA-KUETU/d' ../../database/database_fr.txt
cat kuetu.txt >> ../../database/database_fr.txt
rm kuetub.txt
mv kuetu.txt kuetub.txt
sort -V ../../database/database_fr.txt -o ../../database/database_fr2.txt
rm ../../database/database_fr.txt
mv ../../database/database_fr2.txt ../../database/database_fr.txt