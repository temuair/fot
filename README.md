# Fragments of Temuair Fan Website

## Running the Website Locally

The website is built using [MkDocs](https://www.mkdocs.org/getting-started/) and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/getting-started/), which are both most easily installed using pip:

```
sudo apt-get install python3-pip  # if needed
pip install mkdocs
pip install -lv mkdocs-material==6.2.4
```

After downloading the website files, you should then be able to serve the website locally:

```
mkdocs serve
```

You should see output saying where the website is hosted (probably localhost:8000 or http://127.0.0.1:8000). See [here](https://www.mkdocs.org/getting-started/) for more information if you encounter difficulties.

## Contributing

Website files are built from [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) files. Pages can be added to the navigation bar in `mkdocs.yml`.

After making changes, you should serve the website locally to confirm the changes look correct.

Fork this repository and submit a pull request with your changes for review.

## Building the Live Website

This requires developer permissions on the repository:

```
mkdocs gh-deploy
```
