for fichier in *.txt ; do node go "$fichier" >> f"$fichier" ; done
#for fichier in *.txt ; do node go "$fichier"; done
sleep 2
sync
sort -V f* -o database_ci.txt
