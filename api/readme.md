# Naruto Quotes Api

Simple app to generate random Naruto quotes using Python and Flask.

This project is a variation of
[naruto-quotes-server](https://github.com/celso-henrique/naruto-quotes-server)
repository that responds with randomly selected texts, for consumption by the
client application. The texts are presented with the figure of the
__philosoraptor__ meme.

## Running locally

With Python and Pip installed, install the dependencies with:

```sh
$ pip install -r requirements.txt
```

and finally run:
```sh
python3 app.py

```

## Routes

The two routes defined in this API return a JSON object with the following properties:

Property | Type   | Description
---------|--------|-------------
id       | number | Unique identifier
speaker  | string | Source name
quote    | string | Text of quote
src      | string | Source text URL

### GET a random quote

Returns a random text with the possibility of being a repetition of the current text.

> `/`

Returns a JSON with:


### GET an exclusive random quote

Returns random text excluding the one that has the given identifier `{excluded_id}` in the path.

> `/{excluded_id}`


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
