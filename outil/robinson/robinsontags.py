#coding: utf-8
#
#  Copyright (c) 2005 by Ulrik Petersen
#  All rights reserved.
#
#  Redistribution and use in source and binary forms, with or without
#  modification, are permitted provided that the following conditions are
#  met:
#
#  - Redistributions of source code must retain the above copyright
#    notice, this list of conditions and the following disclaimer.
#
#  - Redistributions in binary form must reproduce the above copyright
#    notice, this list of conditions and the following disclaimer in the
#    documentation and/or other materials provided with the distribution.
#
#  - Neither the name "Ulrik Petersen" nor the names of any contributors
#    may be used to endorse or promote products derived from this
#    software without specific prior written permission.
#
#  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
#  "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
#  LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
#  A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
#  HOLDERS OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
#  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
#  BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS
#  OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
#  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
#  TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE
#  USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
#  DAMAGE
#

import re

def get_enum_from_dict(dict, str):
    if str == "NA":
        return str
    else:
        if dict is psp_dict:
            return dict[str][0]
        else:
            return dict[str]

def printMQL(f, feature_name, str, dict):
    if str == "NA":
        return
    else:
        print >>f, "  %s:=%s;" % (feature_name, get_enum_from_dict(dict, str))

def cmp_longer_first(str1, str2):
    i1 = 0
    i2 = 0
    lasts1 = len(str1)-1
    lasts2 = len(str2)-1
    while i1 != lasts1 and i2 != lasts2:
        c1 = str1[i1]
        c2 = str2[i2]
        if c1 != c2:
            if c1 < c2:
                return -1
            else:
                return 1
        i1 += 1
        i2 += 1

    if lasts1 == lasts2:
        return 0
    elif lasts1 < lasts2:
        return 1
    else:
        return -1
    
def get_re_from_dict(dict):
    rstr = ""
    keys = dict.keys()
    keys.sort(cmp_longer_first)
    for k in keys:
        rstr += "(^" + k + ")|"
    return re.compile(rstr[0:-1])

def parse_re(regex, str):
    m = regex.match(str)
    if m != None:
        result = str[m.start():m.end()]
        remainder = regex.sub('', str, 1)
        return result, remainder
    else:
        return "", str
        

def parse_suffix(str, rptag):
    suffix, remainder = parse_re(suffix_re, str)
    if suffix != "":
        rptag.suffix = suffix
    return remainder

def parse_extra(str, rptag):
    extra, remainder = parse_re(extra_re, str)
    if extra != "":
        rptag.extra = extra
    return remainder

def parse_psp_indeclinable(str, rptag):
    remainder = parse_suffix(str, rptag)
    return remainder

def parse_case(str, rptag):
    case, remainder = parse_re(case_re, str)
    if case != "":
        rptag.case = case
    return remainder

def parse_number(str, rptag):
    number, remainder = parse_re(number_re, str)
    if number != "":
        rptag.number = number
    return remainder

def parse_possessor_number(str, rptag):
    number, remainder = parse_re(number_re, str)
    if number != "":
        rptag.possessor_number = number
    else:
        raise Exception("Unknown ending: %s" % str)
    return remainder

def parse_gender(str, rptag):
    gender, remainder = parse_re(gender_re, str)
    if gender != "":
        rptag.gender = gender
    return remainder

def parse_gender_number(str, rptag):
    remainder = parse_number(str, rptag)
    remainder = parse_gender(remainder, rptag)
    return remainder

def parse_psp_noun_like(str, rptag):
    remainder = parse_case(str, rptag)
    remainder = parse_gender_number(remainder, rptag)
    if remainder != "":
        remainder = parse_suffix(remainder, rptag)
    return remainder

def parse_person(str, rptag):
    person, remainder = parse_re(person_re, str)
    if person != "":
        rptag.person = person
    else:
        rptag.person = "3"
    return remainder


def parse_possessor_person(str, rptag):
    person, remainder = parse_re(person_re, str)
    if person != "":
        rptag.person = person
    else:
        raise Exception("Unknown ending: %s" % str)
    return remainder


def parse_psp_pronoun(str, rptag):
    remainder = parse_person(str, rptag)
    if rptag.person == "3":
        remainder = parse_case(remainder, rptag)
        remainder = parse_number(remainder, rptag)
        remainder = parse_gender(remainder, rptag)
    else:
        remainder = parse_case(remainder, rptag)
        remainder = parse_number(remainder, rptag)
    if remainder != "":
        remainder = parse_suffix(remainder, rptag)
    return remainder

def parse_psp_pronoun_2(str, rptag):
    remainder = parse_person(str, rptag)
    remainder = parse_case(remainder, rptag)
    remainder = parse_number(remainder, rptag)
    remainder = parse_gender(remainder, rptag)
    if remainder != "":
        remainder = parse_suffix(remainder, rptag)
    return remainder

def parse_psp_pronoun_3(str, rptag):
    remainder = parse_possessor_person(str, rptag)
    remainder = parse_possessor_number(remainder, rptag)
    remainder = parse_case(remainder, rptag)
    remainder = parse_number(remainder, rptag)
    remainder = parse_gender(remainder, rptag)
    if remainder != "":
        remainder = parse_suffix(remainder, rptag)
    return remainder

def parse_tense(str, rptag):
    tense, remainder = parse_re(tense_re, str)
    if tense != "":
        rptag.tense = tense
    return remainder

def parse_voice(str, rptag):
    voice, remainder = parse_re(voice_re, str)
    if voice != "":
        rptag.voice = voice
    return remainder


def parse_mood(str, rptag):
    mood, remainder = parse_re(mood_re, str)
    if mood != "":
        rptag.mood = mood
    return remainder


def parse_psp_verb(str, rptag):
    remainder = parse_tense(str, rptag)
    remainder = parse_voice(remainder, rptag)
    remainder = parse_mood(remainder, rptag)
    if rptag.mood in ["R", "P"]:     # participle
        if remainder[0] == "-":
            remainder = remainder[1:]
        remainder = parse_case(remainder, rptag)
        remainder = parse_number(remainder, rptag)
        remainder = parse_gender(remainder, rptag)
    elif rptag.mood in ["I", "S", "O", "M"]: # finite verbs
        if remainder == "":
            #print "UP1: str = '" + str + "'"
            pass
        elif remainder[0] == "-":
            remainder = remainder[1:]
        remainder = parse_person(remainder, rptag)
        remainder = parse_number(remainder, rptag)
    if remainder != "":
        remainder = parse_extra(remainder, rptag)
    return remainder


#OK
suffix_dict = {
    '-S':'superlatif',
    '-C':'comparatif',
    '-ABB':'abrégé',
    '-I':'interrogatif',
    '-N':'négatif',
    '-ATT':'attique',
    '-P':'particule-attachée',
    '-K':'crase',
}



#OK
case_dict = {
    "N" : "nominatif",
    "V" : "vocatif",
    "G" : "génitif",
    "D" : "datif",
    "A" : "accusatif"
}



#OK
number_dict = {
    "S" : "singulier",
    "P" : "pluriel",
}



#OK
gender_dict = {
    "M" : "masculin",
    "F" : "féminin",
    "N" : "neutre",
}



#OK
tense_dict = {
    "P" : "présent",
    "I" : "imparfait",
    "F" : "futur",
    "2F" : "second_futur",
    "A" : "aoriste",
    "2A" : "second_aoriste",
    "R" : "parfait",
    "2R" : "second_parfait",
    "L" : "plus-que-parfait",
    "2L" : "second_plus-que-parfait",
    "X" : "non_temps_statué"
}



#OK
voice_dict = {
    "A" : "actif",
    "M" : "moyen",
    "P" : "passif",
    "E" : "moyen_ou_passif",
    "D" : "moyen_déponent",
    "O" : "passif_déponent",
    "N" : "moyen_ou_passif_déponent",
    "Q" : "actif_impersonnel",
    "X" : "non_voix"
}



#OK
mood_dict = {
    "I" : "indicatif",
    "S" : "subjonctif",
    "O" : "optatif",
    "M" : "impératif",
    "N" : "infinitif",
    "P" : "participe",
    "R" : "impératif_participe"
}



#OK
extra_dict = {
    "-M" : "signification_moyenne",
    "-C" : "forme_contracté",
    "-T"  : "transitif",
    "-A" : "aéolique",
    "-ATT" : "attique",
    "-AP" : "forme_apocopée",
    "-IRR" : "forme_irrégulière_ou_impure"
}



#OK
person_dict = {
    "1" : "1e",
    "2" : "2e",
    "3" : "3e"
}



#OK
psp_dict = {
  "ADV" : ("adverbe", parse_psp_indeclinable),
  "CONJ" : ("conjonction", parse_psp_indeclinable),
  "COND" : ("conjonction-de-subordination", parse_psp_indeclinable),
  "PRT" : ("particule", parse_psp_indeclinable),
  "PREP" : ("préposition", parse_psp_indeclinable),
  "INJ" : ("interjection", parse_psp_indeclinable),
  "ARAM" : ("araméen", parse_psp_indeclinable),
  "HEB" : ("hébreu", parse_psp_indeclinable),
  "N-PRI" : ("nom-propre-indéclinable", parse_psp_indeclinable),
  "A-NUI" : ("chiffre-indéclinable", parse_psp_indeclinable),
  "N-LI" : ("lettre-indéclinable", parse_psp_indeclinable),
  "N-OI" : ("nom-autre-type-indéclinable", parse_psp_indeclinable),
  "N-" : ("nom", parse_psp_noun_like),
  "A-" : ("adjectif", parse_psp_noun_like),
  "R-" : ("pronom-relatif", parse_psp_pronoun),
  "C-" : ("pronom-réciproque", parse_psp_pronoun),
  "D-" : ("pronom-démonstratif", parse_psp_pronoun),
  "T-" : ("article", parse_psp_noun_like),
  "K-" : ("pronom-corrélatif", parse_psp_pronoun),
  "I-" : ("pronom-interrogatif", parse_psp_pronoun),
  "X-" : ("pronom-indéfini", parse_psp_pronoun),
  "Q-" : ("pronom-corrélatif-ou-interrogatif", parse_psp_pronoun),
  "F-" : ("pronom-réfléchi", parse_psp_pronoun_2),
  "S-" : ("pronom-possessif", parse_psp_pronoun_3),
  "P-" : ("pronom-personnel", parse_psp_pronoun),
  "V-" : ("verbe", parse_psp_verb),
}


person_re = get_re_from_dict(person_dict)
gender_re = get_re_from_dict(gender_dict)
suffix_re = get_re_from_dict(suffix_dict)
case_re = get_re_from_dict(case_dict)
number_re = get_re_from_dict(number_dict)
gender_re = get_re_from_dict(gender_dict)
tense_re = get_re_from_dict(tense_dict)
voice_re = get_re_from_dict(voice_dict)
mood_re = get_re_from_dict(mood_dict)
extra_re = get_re_from_dict(extra_dict)
psp_re = get_re_from_dict(psp_dict)



class RobinsonPierpontTag:
    def __init__(self, tag):
        self.tag = tag
        self.psp = ""
        self.case = "NA"
        self.number = "NA"
        self.gender = "NA"
        self.suffix = "NA"
        self.tense  = "NA"
        self.voice = "NA"
        self.mood = "NA"
        self.extra = "NA"
        self.person = "NA"
        self.possessor_number = "NA"
        self.parsetag()

    def parsetag(self):
        psp_re = get_re_from_dict(psp_dict)
        self.psp, remainder = parse_re(psp_re, self.tag)
        if remainder == "":
            return
        else:
            remainder = psp_dict[self.psp][1](remainder, self)
            if remainder != "":
                print self.tag, " remainder =", remainder

    def writeMQL(self, f):
        printMQL(f, "psp", self.psp, psp_dict)
        printMQL(f, "case", self.case, case_dict)
        printMQL(f, "number", self.number, number_dict)
        printMQL(f, "possessor_number", self.possessor_number, number_dict)
        printMQL(f, "gender", self.gender, gender_dict)
        printMQL(f, "suffix", self.suffix, suffix_dict)
        printMQL(f, "tense", self.tense, tense_dict)
        printMQL(f, "voice", self.voice, voice_dict)
        printMQL(f, "mood", self.mood, mood_dict)
        printMQL(f, "extra", self.extra, extra_dict)
        printMQL(f, "person", self.person, person_dict)

    def hasDifferentCNG(self, othertag):
        if self.case <> othertag.case or self.number <> othertag.number or self.gender <> othertag.gender:
            return True
        else:
            return False






'''
t = RobinsonPierpontTag("N-NSF")
t = RobinsonPierpontTag("N-NSF")
t = RobinsonPierpontTag("V-PAI-3S")
t = RobinsonPierpontTag("P-2DS")
t = RobinsonPierpontTag("V-PAN")
t = RobinsonPierpontTag("P-ASF")
t = RobinsonPierpontTag("CONJ")
t = RobinsonPierpontTag("V-PAP-NSM")
t = RobinsonPierpontTag("V-2AAP-NSM")
t = RobinsonPierpontTag("P-ASM")
t = RobinsonPierpontTag("V-AAN")
t = RobinsonPierpontTag("V-AOI-3S")
t = RobinsonPierpontTag("T-ASM")
t = RobinsonPierpontTag("N-ASM")
t = RobinsonPierpontTag("ADV")
t = RobinsonPierpontTag("N-ASM")
t = RobinsonPierpontTag("P-ASM")
t = RobinsonPierpontTag("V-IAI-3P")
t = RobinsonPierpontTag("N-DPN")
t = RobinsonPierpontTag("CONJ")
t = RobinsonPierpontTag("V-2ADP-DPN")
t = RobinsonPierpontTag("T-GSM")
t = RobinsonPierpontTag("N-GSM")
t = RobinsonPierpontTag("V-ADI-3S")
t = RobinsonPierpontTag("T-NSF")
t = RobinsonPierpontTag("PRT-N")
t = RobinsonPierpontTag("S-1PNSF")



testkkk = [
"S-2PDSF",
"S-1SGSF",
"S-1SASF",
"S-1SDSF",
"S-1PDPM",
"S-1PNPM",
"S-1SAPN",
"S-2SGSF",
"S-1SASF",
"S-1PNSF",
"S-1PGPF",
"S-1SAPN",
"S-1SAPM",
"ADV-I",
"ADV-S",
"ADV-K",
"ADV-C",
"PRT-I",
"COND-K",]


for kkk in testkkk:

    
    rbt     = RobinsonPierpontTag(kkk)
    morph   = ''
    
    print ("\n"+kkk+":")


    ...
   
    print(morph)

'''