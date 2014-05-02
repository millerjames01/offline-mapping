offline-mapping
===============

A PhoneGap application, a brief proof of concept showing how PhoneGap, SQLite, and Leaflet can work together to display map tiles in an offline setting. Currently only works for Android, but once I learn a little more about the iOS file system it could be adapted to that.

Prerequisites
=============
You need to have [phonegap](http://phonegap.com/install "Phonegap Install") which in turn requires npm and NodeJS, which is mentioned on the Phonegap installation page. 
Having the [Android SDK](https://developer.android.com/sdk/index.html "Android Install") is also necessary for building the project. It will also allow you to setup phone emulators and view loggign results from running the application.

Installation and Running
========================
Running the project out of the box should be fairly simple with Phonegap installed. Make sure you either have an Android device plugged in or an Emulator installed on your computer, then

    $ cd /path/to/your/workspace
    $ git clone git@github.com:millerjames01/offline-mapping.git
    $ cd offline-mapping
    $ chmod +x build
    $ ./build
    
After running it for the first time, all you should have to do to run it again is type

    $ phonegap run android
    
Acknowledgments and So Forth
============================

Thank you to github user [stdavis](https://github.com/stdavis) without whome I would have been severely lost in connecting an SQLite databse to a Leaflet TileAdapter. 

If there seem to be problems or you need some help, you can email me at [miller.james01@gmail.com](mailto:miller.james01@gmail.com)
