import React from 'react';
import Main from '../../layouts/main/Main';

import styles from './style.module.css';

import ludo from '../../images/ludo.png';
import ludoMini from '../../images/mini_ludo.png';

function Home() {
  return (
    <Main>
      <img src={ludo} className={styles.ludo} alt="Ludo" />
      <div className={`container ${styles.containerRed}`}>
        <div className={styles.child1}>
          <h2> Origin</h2>
          <br />
          <hr />
          <br />
          <p>
            latin word ludo mean play in english. It is a strategy board game
            for two to four players, in which the players race their four tokens
            from start to finish according to the rolls of a single die. Like
            other cross and circle games, Ludo is derived from the Indian game
            Pachisi. The game and its variations are popular in many countries
            and under various names.
          </p>{' '}
          <br />
          <a href="https://en.wikipedia.org/wiki/Ludo">
            <p className={styles.note}>source Wikipedia</p>
          </a>
        </div>

        <br />
        <br />

        <div className={styles.child2}>
          <p>
            {' '}
            <img
              src={ludoMini}
              className={styles.imageRounded}
              alt="Ludo"
            />{' '}
          </p>
        </div>
      </div>

      <div className={`container ${styles.containerGreen}`}>
        <h2> Rules</h2>
        <br />
        <hr />
        <br />
        <h3>Overview</h3>
        <p>
          <br />
          Two, three, or four can play, without partnerships. At the beginning
          of the game, each four tokens of player are out of play and staged in
          the yard of player (one of the large corner areas of the board in the
          colour of player). When able to, the players enter their tokens one
          per turn on their respective starting squares and proceed to race them
          clockwise around the board along the game track (the path of squares
          not part of any home column of player). When reaching the square below
          their home column, a player continues by moving tokens up the column
          to the finishing square. The rolls of a single die control the
          swiftness of the tokens, and entry to the finishing square requires a
          precise roll from the player. The first to bring all their tokens to
          the finish wins the game. The others often continue to play to
          determine second-, third-, and fourth-place finishers.
        </p>
        <br />
        <hr />
        <br />

        <h3>Gameplay</h3>
        <p>
          <br />
          Each player rolls a die; the highest roller begins the game. Players
          alternate turns in a clockwise direction. To enter a token into play
          from its yard to its starting square, a player must roll a six.
          Players can draw a token from home every time they get a six unless
          home is empty or move a piece six times. The start box has two own
          tokens (is doubled). If the player has no tokens yet in play and rolls
          other than a six, the turn passes to the next player. Players must
          always move a token according to the die value rolled. Once players
          have one or more tokens in play, they select a token and move it
          forwards along the track the number of squares indicated by the die.
          If you roll a certain number and that forces your token to land on a
          spot occupied by another token of player then you capture that token
          and force the person to return that token back to their home point.
          This forces them to roll another 6 to take it out of their home and
          move it again. While doing your turn, if 2 of your tokens land on the
          same spot then they create something that is called a block. A block
          means that if an opposing token lands on the same spot as the block,
          the player is forced to return the token back to their home base. If
          the player cannot draw a token from home, rolling a six earns the
          player an additional or bonus roll in that turn. If the bonus roll
          results in a six again, the player earns again an additional bonus
          roll. If the third roll is also a six, the player may not move and the
          turn immediately passes to the next player. If the advance of a token
          ends on a square occupied by an token of opponent, the opponent token
          is returned to its of owner yard. The returned token can be re-entered
          into play only when the owner rolls a six. If a piece lands on the
          same space as another piece of the same colour, the pieces are doubled
          and form a block. If the advance of a block ends on an block of
          opponent, the latter is captured and returned to its of yard of owner,
          collectively. A home of player column squares are always safe, since
          no opponent may enter them. In the home column, a player cannot jump
          over; after one rotation is completed, the player must enter the home
          and roll the exact number needed to get each token onto the home
          triangle. Once you have gotten all your tokens into the home triangle,
          if you are the first person to do so, you have won the game and in
          house rules you can wait for the others to finish and get 2nd, 3rd or
          4th.
        </p>
        <br />
        <a href="https://en.wikipedia.org/wiki/Ludo">
          <p className={styles.note}>source Wikipedia</p>
        </a>
      </div>

      <div className={`container ${styles.containerBlue}`}>
        <h2> History</h2>
        <br />
        <hr />
        <br />
        <h3>The Mahabharata</h3>
        <p>
          <br />
          Pachisi was created in India in the sixth century CE. The earliest
          evidence of this evolution of game in India is the depiction of boards
          on the caves of Ellora. The original version is also described in the
          Indian epic Mahabharata in which Shakuni uses cursed dice to beat the
          Pandavas, and at last after losing everything, Yudhisthira puts his
          wife Draupadi on stake and loses her, too. The Pandavas get all their
          belongings back, though, after Draupadi vows to curse the whole Kuru
          lineage, but stops at the intervention of Gandhari, and seeing an
          opportunity to still anger of Draupadi, Kuru king Dhritarashtra
          promises to give back to the Pandavas all that they had lost in the
          game. It was also known as Chaupar in ancient times. The contemporary
          version was played by the Mughal emperors of India; a notable example
          is Akbar. Pachisi was modified to use a cubic die with a die cup and
          patented as Ludo in England in 1896. The Royal Navy took Ludo and
          converted it into the board game Uckers.
        </p>
        <br />

        <hr />
        <br />
        <h3>Ludo board</h3>
        <p>
          <br />
          Special areas of the Ludo board are typically coloured bright yellow,
          green, red, and blue. Each player is assigned a colour and has four
          tokens in their colour. The board is normally square with a
          cross-shaped playspace, with each arm of the cross having three
          columns of squares, usually six per column. The middle columns usually
          have five squares coloured; these represent a home column of player. A
          sixth coloured square not on the home column is a starting square of
          player. At the centre of the board is a large finishing square, often
          composed of coloured triangles atop the home columns of player (thus
          depicting arrows pointing to the finish).
        </p>
        <br />
        <a href="https://en.wikipedia.org/wiki/Ludo">
          <p className={styles.note}>source Wikipedia</p>
        </a>
      </div>
    </Main>
  );
}

export default Home;
