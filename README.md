# Find Your Venue

# API

api link: https://app.ticketmaster.com/discovery/v2/venues?apikey=4Z9TkEymjwvhSSqYhg0j7LgpNIVTgahG&locale=*

    const url = "https://app.ticketmaster.com/discovery/v2/venues?apikey=4Z9TkEymjwvhSSqYhg0j7LgpNIVTgahG&locale=*"
            fetch(url)
            .then(res => res.json())
            .then(data => {
                const venues = data._embedded.venues
                console.log(venues)
                setVenues(venues)
            })

# MVP's

|              To Do's              |  Time  |
| :-------------------------------: | :----: |
| Nav Bar - "Home" and "All Venues" |  1 HR  |
|        Concert Background         | 2.5 HR |
|           API of Venues           |  6 HR  |
|          Favorite Button          |  3 HR  |
|         List of My Faves          |  6 HR  |

# Post MVP's

|        To Do's        | Time |
| :-------------------: | :--: |
|         Logo          | 3 HR |
| Heart image for faves | 3 HR |
|   Font and Styling    | 1 HR |
|   Animation or Gifs   | 2 HR |

Total: 27.5 Hours

# Grid

![Grid Image](https://i.ibb.co/L0htmQ1/IMG-4607.png)

# Preview Sketch

![Sketch of App](https://i.ibb.co/0MLCgPb/IMG-4608.png)

# App Architecture

![Architecture](https://i.ibb.co/DQGHLF8/IMG-4609.png)
