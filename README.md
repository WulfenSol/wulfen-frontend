# Wulfen (wulfen-frontend)

The Wulfen Species

# Maintainer Instructions

All of the image files are under `/public/images/`.

All of the editable files that are not written in a programming language are under `/src/assets/`.
For example if you want to make a change to the `fauna` section of the `world` tab, edit the file `/src/assets/world/fauna.txt`.

## editing the text in the website

All of the paragraphs in the website are simply .txt files. All of the text files are located in the folder `/src/assets/`

## Adding/editing an image for the gallery

After adding an image to the folder `/public/images/gallery/`, edit the file `/src/assets/gallery.csv` and add the following row:

`<Name>`,`<Artist>`,`<Owner>`,`<Image URL (simply the path to the image file)>`,`<Thumb URL (the path to the thumb image file)>`,`<Ratio (width/height)>`

If you need to include a `,` in one of those fields, wrap that field with quotation marks like in the following example:

`"Character, the wulfen","Skill, the artist","Brain, the owner",images/gallery/image.png,images/gallery/thumb.png,4/3`

# Developer Instructions

## Install the dependencies

```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn run lint
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
