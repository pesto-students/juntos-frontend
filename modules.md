# Frontend Modules and APIs

## `SyncedVideoPlayer(user, videoId, channel, roomId)`
- `start()`
- `stop()`
- `play()`
- ` pause()`

## `Chat(user, roomId, channel)`
- `sendMessage(message)`
- `fetchMessages()`

## `Room(members:Array<Viewers>, Host, User)`
### Dependency
- `Chat`
- `SyncedVideoPlayer`

### API
- `startVideo()`
- `stopVideo()`
- `playVideo()`
- `pauseVideo()`
- `sendChatMessage()`
- `fetchChatMessages()`
- `setVideo(videoId)`
- `endParty()`
- `getShareLink()`

## `Auth`
- `signUp([email, password]): User`
- `signIn([email, password]): User`
- `requestPasswordReset([email])`
- `signOut(user)`

## `User`
- `getProfile()`
- `[getToken()]`

## `App`
- `createRoom(): Room`
- `joinRoom(roomId): Room`
