# [UnDeck](https://undeck.herokuapp.com/)
## A React-Based Pokémon Card Browser and Deck Builder

UnDeck is the spiritual successor to the depracated [Pikadeck](https://pikadeck.net/) app. I started the project in vanilla JavaScript,
but soon it grew to a place such that I needed a better, more centralized codebase. Thus, I decided to use the project as an excuse to learn the React.js
framework, and soon after that I implemented Redux as my central store system. Currently, the app has essentially reached it's minimum viable product,
supporting almost all the features that the original did, with a streamlined user experience to enhance deck-building. Currently, the only feature from
the original that is not fully implemented is advanced search, which is currently only available in a CLI-esque manner through the search bar or
browser address bar.

### Features
- Homepage featuring an infinite scroll of high-rarity Pokémon cards
- Advanced search framework that supports filtering by name, set, supertype, and much more
- Robust deck building system allowing for fast adding, removing, and clearing the deck
- Download either a playset (4) of a single card or all cards in your current deck as a printable PDF
- View cards in detail either with the zoom modal, or the details modal

### Upcoming Features
- Advanced search menu to provide a GUI for hightened user experience
- Import/export system for decks to allow sharing of decks in a string format
- User system where users can save decks, showcase them on their profile, and potentially generate custom URLs for their deck
- Optimization for mobile, or potentially a mobile app eventually

### Known Bugs
- Certain Energy cards are inconsistent between the Pokémon API and the SDK, resulting in visual errors in details modal

### Credits
- [Pokémon TCG API](https://pokemontcg.io/)
- [PikaDeck](https://github.com/cssagogo/pikadeck)
