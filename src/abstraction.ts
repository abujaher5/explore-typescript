// abstraction third pillar of OOP ==> get idea first and later get  implementation

// abstraction can implement in two way. 1.interface ,2. abstract class

// --- WITH INTERFACE ---
interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}
// implementation

class MusicPlayer implements MediaPlayer {
  play() {
    console.log("Playing music..");
  }
  pause(): void {
    console.log("Music paused..!!");
  }
  stop() {
    console.log("Music is stop..");
  }
}

const myPlayer = new MusicPlayer(); // create instance
// myPlayer.play(); // op: Playing music..

// --- WITH ABSTRACT CLASS ---

abstract class MediaPlayer1 {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

// implementation

class MusicPlayer1 extends MediaPlayer1 {
  play(): void {
    throw new Error("Method not implemented.");
  }
  paly() {
    console.log("Playing music..");
  }
  pause(): void {
    console.log("Music paused..!!");
  }
  stop() {
    console.log("Music is stop..");
  }
}
const myPlayer1 = new MusicPlayer1();
myPlayer1.paly(); // op: Playing music..
myPlayer1.stop(); // op: Music is stop..
