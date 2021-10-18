Swal.fire({
    title: '<strong>Bienvenue</strong>',
    icon: '',
    html: `
    <div class="game-details">
            <div class="game-details-body">
                <p>Dans ce jeu 2 joueurs évoluent chacun leur tour pour s'affronter ⚔️.</p>
                <p class="game-rules">Voici les règles de la bataille :</p>
                </p>
                <ul>
                    <li>▻ Les obstacles, les armes et les joueurs sont placés aléatoirement sur la carte à chaque partie.</li>
                    <li>▻ Un joueur peut se déplacer horizontalement ou verticalement de une à trois cases. Il ne peut évidemment pas passer à travers un obstacle 👻.</li>
                    <li>▻ Quand un joueur passe sur une case contenant une arme, il laisse son arme actuelle et la remplace par la nouvelle.</li>
                    <li>▻ Chaque arme provoque des points de dégâts différents, indiqués dans la liste à droite de la grille de jeu.</li>
                </ul>
                <p class="game-rules">Les déplacements :</p>
                <ul>
                    <li>▻ Les cases dans lesquelles le joueur peut se déplacer sont mises en surbrillance.</li>
                    <li>▻ Le joueur avance son personnage avec en cliquant sur une case avec la souris : attention, pas de retour en arrière possible !</li>
                </ul>
                <p class="game-rules">La bataille :</p>
                <ul>
                    <li>▻ Une fois côte à côte, les joueurs peuvent livrer bataille.</li>
                    <li>▻ Chacun leur tour, ils peuvent choisir d'attaquer (bouton "Attaquer"), ou se défendre contre le prochain coup (bouton "Se défendre").</li>
                    <li>▻ Les dégâts infligés à l'adversaire dépendent de l’arme possédée par le joueur.</li>
                    <li>▻ Lorsque le joueur se défend, il encaisse 50% de dégâts en moins qu’en temps normal.</li>
                    <li>▻ Dès que les points de vie d’un joueur (initialement à 100) tombent à 0 , celui-ci a perdu 💀. Un message s’affiche et la partie est terminée.</li>
                </ul>
            </div>
        </div>
      `,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: true,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Jouer !',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>Abandonner',
    cancelButtonAriaLabel: 'Thumbs down',
  });

const grid = new Grid(10, 10,  10, 5, 2);
grid.createGrid();
grid.createObstacles();
grid.createWeapons();
grid.createPlayers();
grid.displayPlayersInfo();
grid.drawObstacles();
grid.drawPlayers();
grid.drawWeapons();
grid.takeWeapon();
grid.displayWeaponsInfo();
grid.isPlayerCollapsed();
const cells = grid.getMovableCells();
grid.drawMovableCells(cells);

