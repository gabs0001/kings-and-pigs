addEventListener('keydown', ({ key }) => {
    if(player.preventInput) return
    switch(key) {
        case 'w':
            for(let i = 0; i < doors.length; i++) {
                const door = doors[i]
                //colisão do player com o centro da porta
                if(
                    player.hitbox.position.x + player.hitbox.width <= door.position.x + door.width &&
                    player.hitbox.position.x >= door.position.x &&
                    player.hitbox.position.y + player.hitbox.height >= door.position.y &&
                    player.hitbox.position.y <= door.position.y + door.height
                ){
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    player.switchSprite('enterDoor')
                    door.play()
                    return
                }
            }

            if(player.velocity.y === 0) player.velocity.y = -25
            break
        case 'a':
            keys.a.pressed = true
            break
        case 'd':
            keys.d.pressed = true
            break
    }
})

addEventListener('keyup', ({ key }) => {
    switch(key) {
        case 'a':
            keys.a.pressed = false
        break
        case 'd':
            keys.d.pressed = false
        break
    }
})