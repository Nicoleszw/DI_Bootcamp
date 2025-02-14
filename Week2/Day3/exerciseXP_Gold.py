# Exercise 1 
import datetime 

def current_date():
   current_date = datetime.date.today()
   print(f"Today's date is: {current_date}")

current_date() 

def time_until_new_year():
    now = datetime.datetime.now()  
    next_year = now.year + 1  
    new_year_date = datetime.datetime(next_year, 1, 1) 
    
    time_remaining = new_year_date - now  

    days = time_remaining.days
    hours, remainder = divmod(time_remaining.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)

    print(f"The 1st of January is in {days} days, {hours:02d}:{minutes:02d}:{seconds:02d} hours.")

time_until_new_year()

# Exercise 2 

def age_on_planets(seconds):
    orbital_periods = {
        "Earth": 1.0,
        "Mercury": 0.2408467,
        "Venus": 0.61519726,
        "Mars": 1.8808158,
        "Jupiter": 11.862615,
        "Saturn": 29.447498,
        "Uranus": 84.016846,
        "Neptune": 164.79132
    }
    
    earth_year_seconds = 31557600  # One Earth year in seconds
    
    for planet, period in orbital_periods.items():
        age = seconds / (earth_year_seconds * period)
        print(f"Age on {planet}: {age:.2f} years")

if __name__ == "__main__":
    age_on_planets(1000000000)