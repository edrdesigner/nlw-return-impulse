# SOLID

1. Single Responsibility Principle
2. Open/Close Principles
3. Liskov substitution principles
4. Interface segregation principles
5. Dependency inversion principles


1. Cada classe tem uma responsabilidade única
2. As classes da aplicação devem ser abertas para extensão mas fechadas pra modificação
3. Nós devemos substituir uma classe pai por uma herança desta e tudo continuar funcionando.
// Ave -> Gavião
4. ex: // Impressora -> imprimir, Scan, Digitalizar // class Impressora implements imprimir, scan, dig ..
5. Inverter as dep. da classe/método contexto externo falar o que a classe precisa