AD26 / R6 * 100
R6 = R5 + L11
R5 = K + Ca + Mg
L11 = Al + H
AD26 = F11 + O179
F11 = Ca

O179 = 'Memória de cálculo'!G111 + 'Memória de cálculo'!I105
'Memória de cálculo'!G111 = G109 * F113

G109 = I107 + I105
I107 = E101 * 0,01783
E101 = G102
G102 = SE(G101>0,01;G101;J102)
G101 = 'EQUILIBRIO E CORREÇÃO NA CTC'!D54
D54 = Teor de CaO do corretivo
J102 = 'EQUILIBRIO E CORREÇÃO NA CTC'!O102
'EQUILIBRIO E CORREÇÃO NA CTC'!O102 = SE(D52=1;"30,4";SE(D52=2;"56";SE(D52=3;"54";SE(D52=4;"29";SE(D52=5;"75,7";SE(D52=6;"35";""))))))
D52 = "Fonte de Corretivo a usar"

'Memória de cálculo'!I105 = 'EQUILIBRIO E CORREÇÃO NA CTC'!P129 * A105 / 1000
'EQUILIBRIO E CORREÇÃO NA CTC'!P129 = M22 / 2,42
M22 = N27
N27 = SE(D23=1;'Memória de cálculo'!B24 * 0,28;SE(D23=2;'Memória de cálculo'!B24 * 0,2;SE(D23=3;'Memória de cálculo'!B24 * 0,09;SE(D23=4;'Memória de cálculo'!B24 * 0,16;SE(D23=5;'Memória de cálculo'!B24 * 0,28;SE(D23=6;'Memória de cálculo'!B24 * 0,52;SE(D23>=7;N28;"")))))))
D23 = "Fonte de Fósforo a utilizar"
'Memória de cálculo'!B24 = B22 * 2,42
B22 = H16 * 100 / G20
H16 = G14 * 100 / F15 / 100
G14 = H12 * 2,29
H12 = 'EQUILIBRIO E CORREÇÃO NA CTC'!N72
'EQUILIBRIO E CORREÇÃO NA CTC'!N72 = N71
N71 = 'Memória de cálculo'!H11 * 2
'Memória de cálculo'!H11 = C12
C12 = 'EQUILIBRIO E CORREÇÃO NA CTC'!Q72
F15='EQUILIBRIO E CORREÇÃO NA CTC'!D25
'EQUILIBRIO E CORREÇÃO NA CTC'!D25 = "Eficiência do Fósforo"
'EQUILIBRIO E CORREÇÃO NA CTC'!Q72 = SE('Memória de cálculo'!E10<0,01;"0,0";'Memória de cálculo'!E10)
'Memória de cálculo'!E10 = 'EQUILIBRIO E CORREÇÃO NA CTC'!D22 - 'EQUILIBRIO E CORREÇÃO NA CTC'!B11
'EQUILIBRIO E CORREÇÃO NA CTC'!D22 = "Teor de Fósforo a atingir"
'EQUILIBRIO E CORREÇÃO NA CTC'!B11 = "Fósforo atualmente no solo (análise)"
N28=SE(D23=7;'Memória de cálculo'!B24*0,52;SE(D23=8;'Memória de cálculo'!B24*0,45;SE(D23=9;'Memória de cálculo'!B24*0,28;SE(D23=10;'Memória de cálculo'!B24*0,44;SE(D23=11;'Memória de cálculo'!B24*0;SE(D23=12;'Memória de cálculo'!B24*0,18;""))))))
G20='EQUILIBRIO E CORREÇÃO NA CTC'!AL40
'EQUILIBRIO E CORREÇÃO NA CTC'!AL40 = SE(D23=1;"18";SE(D23=2;"41";SE(D23=3;"48";SE(D23=4;"45";SE(D23=5;"18";SE(D23=6;"33";SE(D23>=7;AL41;"")))))))
AL41=SE(D23=7;"29";SE(D23=8;"32";SE(D23=9;"24";SE(D23=10;"18,5";SE(D23=11;"52";SE(D23=12;"18";""))))))
F113 = 'EQUILIBRIO E CORREÇÃO NA CTC'!O117
'EQUILIBRIO E CORREÇÃO NA CTC'!O117 = SE(P88>0,0001;P88;"0,0")
P88 = SE(P91>0,001;P91;SE(P91<=13;"0,0"))
P91 = 'Memória de cálculo'!F96 / 'Memória de cálculo'!G109
'Memória de cálculo'!F96 = ('EQUILIBRIO E CORREÇÃO NA CTC'!F11 * 'EQUILIBRIO E CORREÇÃO NA CTC'!E51 / 'EQUILIBRIO E CORREÇÃO NA CTC'!E48) - 'EQUILIBRIO E CORREÇÃO NA CTC'!F11 - I105
'EQUILIBRIO E CORREÇÃO NA CTC'!E51 = "Participação do Cálcio na CTC desejada"
'EQUILIBRIO E CORREÇÃO NA CTC'!E48 = "Participação do Cálcio na CTC atual"

A105 = 'EQUILIBRIO E CORREÇÃO NA CTC'!AM40
'EQUILIBRIO E CORREÇÃO NA CTC'!AM40 = SE(D23=1;"0,49924";SE(D23=2;"0,33877";SE(D23=3;"0,0";SE(D23=4;"0,0";SE(D23=5;"0,49924";SE(D23=6;"0,92716";SE(D23>=7;AM41;"")))))))
AM41 = SE(D23=7;"0,92716";SE(D23=8;"0,80235";SE(D23=9;"0,49924";SE(D23=10;"0,795218";SE(D23=11;"0,0";SE(D23=12;"0,0";""))))))