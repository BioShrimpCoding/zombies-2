namespace SpriteKind {
    export const zombieBoss = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const FireBall = SpriteKind.create()
    export const enemypostcollide = SpriteKind.create()
    export const player2 = SpriteKind.create()
    export const player3 = SpriteKind.create()
    export const sword2 = SpriteKind.create()
    export const sword1 = SpriteKind.create()
    export const sword3 = SpriteKind.create()
    export const coin2 = SpriteKind.create()
    export const coin3 = SpriteKind.create()
}
namespace StatusBarKind {
    export const Xp = StatusBarKind.create()
    export const health2 = StatusBarKind.create()
    export const health3 = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Vamperic == true) {
        Heal = randint(1, 3)
        if (Heal == 1) {
            statusbar.value += -7
            otherSprite.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
            scene.cameraShake(2, 200)
            animation.runImageAnimation(
            otherSprite,
            [img`
                ........................
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .....fffc1111111f.......
                ...fc111cd1111111f......
                ...f1b1b1b1111dddf......
                ...fbfbffcf11fcddf......
                ......fcf111111bbf......
                .......ccbdb1b1fcf......
                .......fffbfbfdff.......
                ........ffffffff........
                ........fffffffffff.....
                .........fffffc111cf....
                .........fffff1b1b1f....
                ..........ffffbfbfbf....
                ...........ffff.........
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ....7.fd11111111df......
                ...7..fd11111111df......
                ...7..fd11111111df......
                ...7..fddd1111dddff.....
                ...77.fbdbfddfbdbfcf....
                ...777fcdcf11fcdcfbf....
                ....77fffbdb1bdffcf.....
                ....fcb1bcffffff........
                ....f1c1c1ffffff........
                ....fdfdfdfffff.........
                .....f.f.f..............
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd111111111f......
                ......fd11111111df......
                ......fd11111111df......
                ......fcdd1111ddcff.....
                .......fbcf11fcbfbbf....
                .......ffbdb1bdffff.....
                ........fcbfbfdf........
                ........ffffffff........
                ......ffffffffff........
                .....fcb1bcffff.........
                ......ffbff.............
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fdd111111ddf......
                ......fbdd1111dddf......
                ......fcdbfddfbdbf......
                .......fbcf11fcbfff.....
                .......ffb1111bcfbcf....
                ........fcdb1bdfbbbf....
                .......ffffffffffcf.....
                .....fcb1bcfffff........
                .....f1b1b1ffff.........
                ......ffbff.............
                ........................
                ........................
                ........................
                ........................
                ........................
                `],
            otherSprite.vx,
            false
            )
            sprites.destroy(otherSprite, effects.disintegrate, 200)
            Kills_per_round += -1
        } else if (Heal == 2) {
            statusbar.value += 7
            otherSprite.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
            scene.cameraShake(2, 200)
            animation.runImageAnimation(
            otherSprite,
            [img`
                ........................
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .....fffc1111111f.......
                ...fc111cd1111111f......
                ...f1b1b1b1111dddf......
                ...fbfbffcf11fcddf......
                ......fcf111111bbf......
                .......ccbdb1b1fcf......
                .......fffbfbfdff.......
                ........ffffffff........
                ........fffffffffff.....
                .........fffffc111cf....
                .........fffff1b1b1f....
                ..........ffffbfbfbf....
                ...........ffff.........
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ....7.fd11111111df......
                ...7..fd11111111df......
                ...7..fd11111111df......
                ...7..fddd1111dddff.....
                ...77.fbdbfddfbdbfcf....
                ...777fcdcf11fcdcfbf....
                ....77fffbdb1bdffcf.....
                ....fcb1bcffffff........
                ....f1c1c1ffffff........
                ....fdfdfdfffff.........
                .....f.f.f..............
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd111111111f......
                ......fd11111111df......
                ......fd11111111df......
                ......fcdd1111ddcff.....
                .......fbcf11fcbfbbf....
                .......ffbdb1bdffff.....
                ........fcbfbfdf........
                ........ffffffff........
                ......ffffffffff........
                .....fcb1bcffff.........
                ......ffbff.............
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fdd111111ddf......
                ......fbdd1111dddf......
                ......fcdbfddfbdbf......
                .......fbcf11fcbfff.....
                .......ffb1111bcfbcf....
                ........fcdb1bdfbbbf....
                .......ffffffffffcf.....
                .....fcb1bcfffff........
                .....f1b1b1ffff.........
                ......ffbff.............
                ........................
                ........................
                ........................
                ........................
                ........................
                `],
            otherSprite.vx,
            false
            )
            sprites.destroy(otherSprite, effects.disintegrate, 200)
            Kills_per_round += -1
        } else {
        	
        }
    } else {
        statusbar.value += -7
        otherSprite.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
        scene.cameraShake(2, 200)
        animation.runImageAnimation(
        otherSprite,
        [img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .....fffc1111111f.......
            ...fc111cd1111111f......
            ...f1b1b1b1111dddf......
            ...fbfbffcf11fcddf......
            ......fcf111111bbf......
            .......ccbdb1b1fcf......
            .......fffbfbfdff.......
            ........ffffffff........
            ........fffffffffff.....
            .........fffffc111cf....
            .........fffff1b1b1f....
            ..........ffffbfbfbf....
            ...........ffff.........
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ....7.fd11111111df......
            ...7..fd11111111df......
            ...7..fd11111111df......
            ...7..fddd1111dddff.....
            ...77.fbdbfddfbdbfcf....
            ...777fcdcf11fcdcfbf....
            ....77fffbdb1bdffcf.....
            ....fcb1bcffffff........
            ....f1c1c1ffffff........
            ....fdfdfdfffff.........
            .....f.f.f..............
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd111111111f......
            ......fd11111111df......
            ......fd11111111df......
            ......fcdd1111ddcff.....
            .......fbcf11fcbfbbf....
            .......ffbdb1bdffff.....
            ........fcbfbfdf........
            ........ffffffff........
            ......ffffffffff........
            .....fcb1bcffff.........
            ......ffbff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fdd111111ddf......
            ......fbdd1111dddf......
            ......fcdbfddfbdbf......
            .......fbcf11fcbfff.....
            .......ffb1111bcfbcf....
            ........fcdb1bdfbbbf....
            .......ffffffffffcf.....
            .....fcb1bcfffff........
            .....f1b1b1ffff.........
            ......ffbff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        otherSprite.vx,
        false
        )
        sprites.destroy(otherSprite, effects.disintegrate, 200)
        Kills_per_round += -1
    }
})
function HowManyPlayers () {
    if (multiplayet == 1) {
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player))
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
        statusbar = statusbars.create(20, 4, StatusBarKind.Health)
        statusbar2 = statusbars.create(20, 4, StatusBarKind.Energy)
        statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -15)
        statusbar2.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 15)
        statusbar.setColor(7, 2, 10)
        statusbar2.setColor(5, 6, 9)
        statusbar.setBarBorder(1, 15)
        statusbar2.setBarBorder(1, 15)
        statusbar.positionDirection(CollisionDirection.Left)
        statusbar.setBarSize(5, 20)
        statusbar.setOffsetPadding(2, 3)
        statusbar2.setOffsetPadding(0, -23.5)
        statusbar.max = 100 + P1Level * 5
        statusbar2.max = 100 + P1Level * 5
        statusbar.value = 100 + P1Level * 5
        statusbar2.value = 100 + P1Level * 5
        statusbar5 = statusbars.create(5, 20, StatusBarKind.Xp)
        statusbar5.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar5.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 9, 2)
        statusbar5.setBarBorder(1, 15)
        statusbar5.setColor(8, 10, 9)
        statusbar5.value = ExpP1
        statusbar5.max = Xp_per_Level
    } else if (multiplayet == 2) {
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player))
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
        statusbar = statusbars.create(20, 4, StatusBarKind.Health)
        statusbar2 = statusbars.create(20, 4, StatusBarKind.Energy)
        statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -15)
        statusbar2.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 15)
        statusbar.setColor(7, 2, 10)
        statusbar2.setColor(5, 6, 9)
        statusbar.setBarBorder(1, 15)
        statusbar2.setBarBorder(1, 15)
        statusbar.positionDirection(CollisionDirection.Left)
        statusbar.setBarSize(5, 20)
        statusbar.setOffsetPadding(2, 3)
        statusbar2.setOffsetPadding(0, -23.5)
        statusbar.max = 100 + P1Level * 5
        statusbar2.max = 100 + P1Level * 5
        statusbar.value = 100 + P1Level * 5
        statusbar2.value = 100 + P1Level * 5
        statusbar5 = statusbars.create(5, 20, StatusBarKind.Xp)
        statusbar5.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar5.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 9, 2)
        statusbar5.setBarBorder(1, 15)
        statusbar5.setColor(8, 10, 9)
        statusbar5.value = ExpP1
        statusbar5.max = Xp_per_Level
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f 3 3 f f e e e e f f 3 3 f . 
            . f b b f b f e e f b f b b f . 
            . f b b e 1 f 4 4 f 1 e b b f . 
            f f b b f 4 4 4 4 4 4 f b b f f 
            f b b f f f e e e e f f f b b f 
            . f e e f b d d d d b f e e f . 
            . . e 4 c d d d d d d c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `, SpriteKind.player2))
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
        statusbar9 = statusbars.create(20, 4, StatusBarKind.health2)
        statusbar7 = statusbars.create(20, 4, StatusBarKind.Energy)
        statusbar9.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar7.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar9.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 0, -15)
        statusbar7.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 0, 15)
        statusbar9.setColor(7, 2, 10)
        statusbar7.setColor(5, 6, 9)
        statusbar9.setBarBorder(1, 15)
        statusbar7.setBarBorder(1, 15)
        statusbar9.positionDirection(CollisionDirection.Left)
        statusbar9.setBarSize(5, 20)
        statusbar9.setOffsetPadding(2, 3)
        statusbar7.setOffsetPadding(0, -23.5)
        statusbar9.max = 85 + P2Level * 5
        statusbar7.max = 125 + P2Level * 5
        statusbar9.value = 85 + P2Level * 5
        statusbar7.value = 125 + P2Level * 5
        statusbar8 = statusbars.create(5, 20, StatusBarKind.Xp)
        statusbar8.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 9, 2)
        statusbar8.value = ExpP2
        statusbar8.max = Xp_per_level2
        statusbar8.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar8.setColor(9, 8, 6)
        statusbar8.setBarBorder(1, 15)
    } else if (multiplayet == 3) {
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player))
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
        statusbar = statusbars.create(20, 4, StatusBarKind.Health)
        statusbar2 = statusbars.create(20, 4, StatusBarKind.Energy)
        statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -15)
        statusbar2.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 15)
        statusbar.setColor(7, 2, 10)
        statusbar2.setColor(5, 6, 9)
        statusbar.setBarBorder(1, 15)
        statusbar2.setBarBorder(1, 15)
        statusbar.positionDirection(CollisionDirection.Left)
        statusbar.setBarSize(5, 20)
        statusbar.setOffsetPadding(2, 3)
        statusbar2.setOffsetPadding(0, -23.5)
        statusbar.max = 100 + P1Level * 5
        statusbar2.max = 100 + P1Level * 5
        statusbar.value = 100 + P1Level * 5
        statusbar2.value = 100 + P1Level * 5
        statusbar5 = statusbars.create(5, 20, StatusBarKind.Xp)
        statusbar5.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar5.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 9, 2)
        statusbar5.setBarBorder(1, 15)
        statusbar5.setColor(8, 10, 9)
        statusbar5.value = ExpP1
        statusbar5.max = Xp_per_Level
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f 3 3 f f e e e e f f 3 3 f . 
            . f b b f b f e e f b f b b f . 
            . f b b e 1 f 4 4 f 1 e b b f . 
            f f b b f 4 4 4 4 4 4 f b b f f 
            f b b f f f e e e e f f f b b f 
            . f e e f b d d d d b f e e f . 
            . . e 4 c d d d d d d c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `, SpriteKind.player2))
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
        statusbar9 = statusbars.create(20, 4, StatusBarKind.health2)
        statusbar7 = statusbars.create(20, 4, StatusBarKind.Energy)
        statusbar9.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar7.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar9.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 0, -15)
        statusbar7.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 0, 15)
        statusbar9.setColor(7, 2, 10)
        statusbar7.setColor(5, 6, 9)
        statusbar9.setBarBorder(1, 15)
        statusbar7.setBarBorder(1, 15)
        statusbar9.positionDirection(CollisionDirection.Left)
        statusbar9.setBarSize(5, 20)
        statusbar9.setOffsetPadding(2, 3)
        statusbar7.setOffsetPadding(0, -23.5)
        statusbar9.max = 85 + P2Level * 5
        statusbar7.max = 125 + P2Level * 5
        statusbar9.value = 85 + P2Level * 5
        statusbar7.value = 125 + P2Level * 5
        statusbar8 = statusbars.create(5, 20, StatusBarKind.Xp)
        statusbar8.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 9, 2)
        statusbar8.value = ExpP2
        statusbar8.max = Xp_per_level2
        statusbar8.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar8.setColor(9, 8, 6)
        statusbar8.setBarBorder(1, 15)
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b 7 7 7 7 b f e f . 
            e 4 f 7 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `, SpriteKind.player3))
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
        statusbar10 = statusbars.create(20, 4, StatusBarKind.health3)
        statusbar11 = statusbars.create(20, 4, StatusBarKind.Energy)
        statusbar10.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar11.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar10.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), 0, -15)
        statusbar11.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), 0, 15)
        statusbar10.setColor(7, 2, 10)
        statusbar11.setColor(5, 6, 9)
        statusbar10.setBarBorder(1, 15)
        statusbar11.setBarBorder(1, 15)
        statusbar10.positionDirection(CollisionDirection.Left)
        statusbar10.setBarSize(5, 20)
        statusbar10.setOffsetPadding(2, 3)
        statusbar11.setOffsetPadding(0, -23.5)
        statusbar10.max = 125 + P3Level * 5
        statusbar11.max = 85 + P3Level * 5
        statusbar10.value = 125 + P3Level * 5
        statusbar11.value = 85 + P3Level * 5
        statusbar12 = statusbars.create(5, 20, StatusBarKind.Xp)
        statusbar12.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), 9, 2)
        statusbar12.value = ExpP3
        statusbar12.max = Xp_per_level3
        statusbar12.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar12.setColor(8, 10, 9)
        statusbar12.setBarBorder(1, 15)
    }
}
// rubrick #10 somewhat
function LevelUp (xp1: number, xp2: number, xp3: number) {
    blockSettings.writeNumber("Played", 0)
    if (ExpP1 >= Xp_per_Level) {
        Xp_per_Level = xp1 + 50
        P1Level += 1
        ExpP1 = 0
    } else if (ExpP1 >= Xp_per_Level) {
        Xp_per_level2 = xp2 + 50
        P2Level += 1
        ExpP2 = 0
    } else {
        Xp_per_level3 = xp3 + 50
        P3Level += 1
        ExpP3 = 0
    }
}
sprites.onOverlap(SpriteKind.player3, SpriteKind.FireBall, function (sprite, otherSprite) {
    statusbar10.value += -15
    sprites.destroy(otherSprite, effects.disintegrate, 200)
    scene.cameraShake(4, 500)
})
// Kubrick #7
controller.combos.attachCombo("lrlrududa", function () {
    HacksONOff = true
    Rounds += 40
    piercing += 50
})
controller.player3.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    Direction3 = "U"
})
sprites.onOverlap(SpriteKind.player3, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar10.value += -7
    otherSprite.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), 0)
    scene.cameraShake(2, 200)
    animation.runImageAnimation(
    otherSprite,
    [img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .....fffc1111111f.......
        ...fc111cd1111111f......
        ...f1b1b1b1111dddf......
        ...fbfbffcf11fcddf......
        ......fcf111111bbf......
        .......ccbdb1b1fcf......
        .......fffbfbfdff.......
        ........ffffffff........
        ........fffffffffff.....
        .........fffffc111cf....
        .........fffff1b1b1f....
        ..........ffffbfbfbf....
        ...........ffff.........
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ....7.fd11111111df......
        ...7..fd11111111df......
        ...7..fd11111111df......
        ...7..fddd1111dddff.....
        ...77.fbdbfddfbdbfcf....
        ...777fcdcf11fcdcfbf....
        ....77fffbdb1bdffcf.....
        ....fcb1bcffffff........
        ....f1c1c1ffffff........
        ....fdfdfdfffff.........
        .....f.f.f..............
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd111111111f......
        ......fd11111111df......
        ......fd11111111df......
        ......fcdd1111ddcff.....
        .......fbcf11fcbfbbf....
        .......ffbdb1bdffff.....
        ........fcbfbfdf........
        ........ffffffff........
        ......ffffffffff........
        .....fcb1bcffff.........
        ......ffbff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fdd111111ddf......
        ......fbdd1111dddf......
        ......fcdbfddfbdbf......
        .......fbcf11fcbfff.....
        .......ffb1111bcfbcf....
        ........fcdb1bdfbbbf....
        .......ffffffffffcf.....
        .....fcb1bcfffff........
        .....f1b1b1ffff.........
        ......ffbff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    otherSprite.vx,
    false
    )
    sprites.destroy(otherSprite, effects.disintegrate, 200)
    Kills_per_round += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FireBall, function (sprite, otherSprite) {
    statusbar.value += -15
    sprites.destroy(otherSprite, effects.disintegrate, 200)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.player3, SpriteKind.coin3, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    coins3 += 1
    statusbar11.value += 1
})
function level_up2 () {
    if (ExpP1 >= Xp_per_Level) {
        LevelUp(Xp_per_Level, Xp_per_level2, Xp_per_level3)
    } else if (ExpP2 >= Xp_per_level2) {
        LevelUp(Xp_per_Level, Xp_per_level2, Xp_per_level3)
    } else if (ExpP3 >= Xp_per_level3) {
        LevelUp(Xp_per_Level, Xp_per_level2, Xp_per_level3)
    }
}
sprites.onOverlap(SpriteKind.player2, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar9.value += -7
    otherSprite.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 0)
    scene.cameraShake(2, 200)
    animation.runImageAnimation(
    otherSprite,
    [img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .....fffc1111111f.......
        ...fc111cd1111111f......
        ...f1b1b1b1111dddf......
        ...fbfbffcf11fcddf......
        ......fcf111111bbf......
        .......ccbdb1b1fcf......
        .......fffbfbfdff.......
        ........ffffffff........
        ........fffffffffff.....
        .........fffffc111cf....
        .........fffff1b1b1f....
        ..........ffffbfbfbf....
        ...........ffff.........
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ....7.fd11111111df......
        ...7..fd11111111df......
        ...7..fd11111111df......
        ...7..fddd1111dddff.....
        ...77.fbdbfddfbdbfcf....
        ...777fcdcf11fcdcfbf....
        ....77fffbdb1bdffcf.....
        ....fcb1bcffffff........
        ....f1c1c1ffffff........
        ....fdfdfdfffff.........
        .....f.f.f..............
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd111111111f......
        ......fd11111111df......
        ......fd11111111df......
        ......fcdd1111ddcff.....
        .......fbcf11fcbfbbf....
        .......ffbdb1bdffff.....
        ........fcbfbfdf........
        ........ffffffff........
        ......ffffffffff........
        .....fcb1bcffff.........
        ......ffbff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fdd111111ddf......
        ......fbdd1111dddf......
        ......fcdbfddfbdbf......
        .......fbcf11fcbfff.....
        .......ffb1111bcfbcf....
        ........fcdb1bdfbbbf....
        .......ffffffffffcf.....
        .....fcb1bcfffff........
        .....f1b1b1ffff.........
        ......ffbff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    otherSprite.vx,
    false
    )
    sprites.destroy(otherSprite, effects.disintegrate, 200)
    Kills_per_round += -1
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.FireBall, function (sprite, otherSprite) {
    statusbar9.value += -15
    sprites.destroy(otherSprite, effects.disintegrate, 200)
    scene.cameraShake(4, 500)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    Direction2 = "R"
})
controller.player3.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    Direction3 = "D"
})
controller.combos.attachCombo("uuddlrlrbab", function () {
    if (multiplayet == 1) {
        sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
        HacksONOff = true
        Vamperic = true
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            .......22...22......
            ......2322.2222.....
            ......232222222.....
            ......222222222.....
            .......22222b2......
            ........222b2.......
            .........222........
            ..........2.........
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            `, SpriteKind.Player))
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 10, 10)
        scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
        statusbar = statusbars.create(20, 4, StatusBarKind.Health)
        statusbar2 = statusbars.create(20, 4, StatusBarKind.Energy)
        statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -15)
        statusbar2.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 15)
        statusbar.setColor(7, 2, 10)
        statusbar2.setColor(5, 6, 9)
        statusbar.setBarBorder(1, 15)
        statusbar2.setBarBorder(1, 15)
        statusbar.positionDirection(CollisionDirection.Left)
        statusbar.setBarSize(5, 20)
        statusbar.setOffsetPadding(2, 3)
        statusbar2.setOffsetPadding(0, -23.5)
        statusbar.max = 700
        statusbar2.max = 50
        statusbar.value = 700
        statusbar2.value = 50
        tiles.setCurrentTilemap(tilemap`level4`)
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(20, 20))
    }
})
controller.combos.attachCombo("lauaradabaaabbbababbalrddu", function () {
    TankHeal = true
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Direction2 == "U") {
        if (cooldown == 0) {
            if (statusbar2.value < 5) {
            	
            } else {
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
                [img`
                    . . . . . f f 4 4 f f . . . . . 
                    . . . . f 5 4 5 5 4 5 f . . . . 
                    . . . f e 3 3 3 3 3 3 e f . . . 
                    . . f b 3 3 3 3 3 3 3 3 b f . . 
                    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
                    . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
                    . f b 3 3 3 3 3 3 3 3 3 3 b f . 
                    . f b b 3 3 3 3 3 3 3 3 b b f . 
                    . f b b b b b b b b b b b b f . 
                    f c b b b b b b b b b b b b c f 
                    f b b b b b b b b b b b b b b f 
                    . f c c b b b b b b b b c c f . 
                    . . e 4 c f f f f f f c 4 e . . 
                    . . e f b d b d b d b b f e . . 
                    . . . f f 1 d 1 d 1 d f f . . . 
                    . . . . . f f b b f f . . . . . 
                    `,img`
                    . . . . . f f 4 4 f f . . . . . 
                    . . . . f 5 4 5 5 4 5 f . . . . 
                    . . . f e 3 3 3 3 3 3 e f . . . 
                    . . f b 3 3 3 3 3 3 3 3 b f . . 
                    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
                    . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
                    . f b 3 3 3 3 3 3 3 3 3 3 b f . 
                    . f b b 3 3 3 3 3 3 3 3 b b f . 
                    . f b b b b b b b b b b b b f . 
                    f c b b b b b b b b b b b b c f 
                    f b b b b b b b b b b b b b b f 
                    . f c c b b b b b b b b c c f . 
                    . . e 4 c f f f f f f c 4 e . . 
                    . . e f b d b d b d b b f e . . 
                    . . . f f 1 d 1 d 1 d f f . . . 
                    . . . . . f f b b f f . . . . . 
                    `],
                100,
                false
                )
                katana2 = sprites.createProjectileFromSprite(img`
                    . c . . . 
                    . c d . . 
                    . c d c . 
                    . c d c . 
                    . c d c . 
                    . c d c . 
                    . c d c . 
                    c c c c c 
                    . . c . . 
                    . . c . . 
                    `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 0, -100)
                katana2.setKind(SpriteKind.sword2)
                scene.cameraShake(1, 100)
                statusbar6 = statusbars.create(5, 1, StatusBarKind.Magic)
                statusbar6.max = piercing2
                statusbar6.value = piercing2
                statusbar6.attachToSprite(katana2, 2, 2)
                cooldown = 1
                pause(200)
                katana2.changeScale(0.5, ScaleAnchor.Middle)
                katana2.x += 5
                katana2.y += 5
                pause(200)
                cooldown = 0
                statusbar7.value += -15
            }
        } else {
            pauseUntil(() => cooldown == 0)
        }
    } else if (Direction2 == "D") {
        if (cooldown == 0) {
            if (statusbar2.value < 5) {
            	
            } else {
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
                [img`
                    . . . . . f f 4 4 f f . . . . . 
                    . . . . f 5 4 5 5 4 5 f . . . . 
                    . . . f e 4 5 5 5 5 4 e f . . . 
                    . . f b 3 e 4 4 4 4 e 3 b f . . 
                    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
                    . f 3 3 e b 3 e e 3 b e 3 3 f . 
                    . f 3 3 f f e e e e f f 3 3 f . 
                    . f b b f b f e e f b f b b f . 
                    . f b b e 1 f 4 4 f 1 e b b f . 
                    f f b b f 4 4 4 4 4 4 f b b f f 
                    f b b f f f e e e e f f f b b f 
                    . f e e f b d d d d b f e e f . 
                    . . e 4 c d d d d d d c 4 e . . 
                    . . e f b d b d b d b b f e . . 
                    . . . f f 1 d 1 d 1 d f f . . . 
                    . . . . . f f b b f f . . . . . 
                    `,img`
                    . . . . . f f 4 4 f f . . . . . 
                    . . . . f 5 4 5 5 4 5 f . . . . 
                    . . . f e 4 5 5 5 5 4 e f . . . 
                    . . f b 3 e 4 4 4 4 e 3 b f . . 
                    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
                    . f 3 3 e b 3 e e 3 b e 3 3 f . 
                    . f 3 3 f f e e e e f f 3 3 f . 
                    . f b b f b f e e f b f b b f . 
                    . f b b e 1 f 4 4 f 1 e b b f . 
                    f f b b f 4 4 4 4 4 4 f b b f f 
                    f b b f f f e e e e f f f b b f 
                    . f e e f b d d d d b f e e f . 
                    . . e 4 c d d d d d d c 4 e . . 
                    . . e f b d b d b d b b f e . . 
                    . . . f f 1 d 1 d 1 d f f . . . 
                    . . . . . f f b b f f . . . . . 
                    `],
                500,
                false
                )
                pause(200)
                cooldown = 1
                katana2 = sprites.createProjectileFromSprite(img`
                    . . c . . 
                    . . c . . 
                    c c c c c 
                    . c d c . 
                    . c d c . 
                    . c d c . 
                    . c d c . 
                    . c d c . 
                    . c d . . 
                    . c . . . 
                    `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 0, 100)
                katana2.setKind(SpriteKind.sword2)
                scene.cameraShake(1, 100)
                statusbar6 = statusbars.create(5, 1, StatusBarKind.Magic)
                statusbar6.max = piercing2
                statusbar6.value = piercing2
                statusbar6.attachToSprite(katana2, 2, 2)
                katana2.changeScale(0.5, ScaleAnchor.Middle)
                katana2.x += -5
                katana2.y += 5
                pause(200)
                cooldown = 0
                statusbar7.value += -15
            }
        } else {
            pauseUntil(() => cooldown == 0)
        }
    }
    if (Direction2 == "R") {
        if (cooldown == 0) {
            if (statusbar2.value < 5) {
            	
            } else {
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
                [img`
                    . . . . . f f f f 4 4 f . . . . 
                    . . . f f b f 5 4 5 5 4 f . . . 
                    . . f b 3 3 e 4 5 5 5 5 f . . . 
                    . f b 3 3 3 3 e 4 4 4 e f . . . 
                    . f 3 3 3 3 3 3 3 3 3 3 f . . . 
                    . f 3 3 3 3 e b 3 e e 3 3 f . . 
                    . f 3 3 3 3 f f e e e 3 3 f . . 
                    . f b b b b f b f e e e 3 f . . 
                    . f b b b b e 1 f 4 4 e f . . . 
                    f f b b b b f 4 4 4 4 f . . . . 
                    f b b b b f f f e e e f . c . . 
                    . f b b f 4 4 e d d d f c c . . 
                    . . f f e 4 4 e d d d f . c . . 
                    . . . f b e e b d b d b f . . . 
                    . . . f f d 1 d 1 d 1 f f . . . 
                    . . . . . f f b b f f . . . . . 
                    `,img`
                    . . . . . f f f f 4 4 f . . . . 
                    . . . f f b f 5 4 5 5 4 f . . . 
                    . . f b 3 3 e 4 5 5 5 5 f . . . 
                    . f b 3 3 3 3 e 4 4 4 e f . . . 
                    . f 3 3 3 3 3 3 3 3 3 3 f . . . 
                    . f 3 3 3 3 e b 3 e e 3 3 f . . 
                    . f 3 3 3 3 f f e e e 3 3 f . . 
                    . f b b b b f b f e e e 3 f . . 
                    . f b b b b e 1 f 4 4 e f . . . 
                    f f b b b b f 4 4 4 4 f . . . . 
                    f b b b b f f f e e e f . c . . 
                    . f b b f 4 4 e d d d f c c b . 
                    . . f f e 4 4 e d d d f . c c . 
                    . . . f b e e b d b d b f . . . 
                    . . . f f d 1 d 1 d 1 f f . . . 
                    . . . . . f f b b f f . . . . . 
                    `,img`
                    . . . . . f f f f 4 4 f . . . . 
                    . . . f f b f 5 4 5 5 4 f . . . 
                    . . f b 3 3 e 4 5 5 5 5 f . . . 
                    . f b 3 3 3 3 e 4 4 4 e f . . . 
                    . f 3 3 3 3 3 3 3 3 3 3 f . . . 
                    . f 3 3 3 3 e b 3 e e 3 3 f . . 
                    . f 3 3 3 3 f f e e e 3 3 f . . 
                    . f b b b b f b f e e e 3 f . . 
                    . f b b b b e 1 f 4 4 e f . . . 
                    f f b b b b f 4 4 4 4 f . . . . 
                    f b b b b f f f e e e f . c c . 
                    . f b b f 4 4 e d d d f c c b b 
                    . . f f e 4 4 e d d d f . c c c 
                    . . . f b e e b d b d b f . . . 
                    . . . f f d 1 d 1 d 1 f f . . . 
                    . . . . . f f b b f f . . . . . 
                    `],
                100,
                false
                )
                katana2 = sprites.createProjectileFromSprite(img`
                    . . c . . . . . . . 
                    . . c c c c c c c c 
                    c c c d d d d d d . 
                    . . c c c c c c . . 
                    . . c . . . . . . . 
                    `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 100, 0)
                katana2.setKind(SpriteKind.sword2)
                scene.cameraShake(1, 100)
                statusbar6 = statusbars.create(5, 1, StatusBarKind.Magic)
                statusbar6.max = piercing2
                statusbar6.value = piercing2
                statusbar6.attachToSprite(katana2, 2, 2)
                cooldown = 1
                pause(200)
                katana2.changeScale(0.5, ScaleAnchor.Middle)
                katana2.x += 5
                katana2.y += 5
                pause(200)
                cooldown = 0
                statusbar7.value += -15
            }
        } else {
            katana2.setKind(SpriteKind.sword2)
            pauseUntil(() => cooldown == 0)
        }
    } else if (Direction2 == "L") {
        if (cooldown == 0) {
            if (statusbar2.value < 5) {
            	
            } else {
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
                assets.animation`myAnim`,
                100,
                false
                )
                pause(200)
                cooldown = 1
                katana2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . c . . 
                    c c c c c c c c . . 
                    . d d d d d d c c c 
                    . . c c c c c c . . 
                    . . . . . . . c . . 
                    `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), -100, 0)
                katana2.setKind(SpriteKind.sword2)
                scene.cameraShake(1, 100)
                statusbar6 = statusbars.create(5, 1, StatusBarKind.Magic)
                statusbar6.max = piercing2
                statusbar6.value = piercing2
                statusbar6.attachToSprite(katana2, 2, 2)
                katana2.changeScale(0.5, ScaleAnchor.Middle)
                katana2.x += -5
                katana2.y += 5
                pause(200)
                cooldown = 0
                statusbar7.value += -15
            }
        } else {
            pauseUntil(() => cooldown == 0)
        }
    }
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.coin2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    coins2 += 1
    statusbar7.value += 1
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Direction3 == "U") {
        if (cooldown == 0) {
            if (statusbar2.value < 5) {
            	
            } else {
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
                [img`
                    . . . f f f f f . . . . . . . . 
                    . f f f f f f f f f . . . . . . 
                    . f f f f f f c f f f . . . . . 
                    f f f f c f f f c f f . . . . . 
                    f c f f c c f f f c c f f . . . 
                    f c c f f f f e f f f f f . . . 
                    f f f f f f f e e f f f . . . . 
                    f f e e f b f e e f f . . . . . 
                    . f e 4 e 1 f 4 4 f . . . . c c 
                    . f f f e 4 4 4 4 f . . . c b c 
                    . . f e e e e e f f . c c b b c 
                    . . e 4 4 e 7 7 7 f c c b b c . 
                    . . e 4 4 e 7 7 7 f . c c c . . 
                    . . f e e f 6 6 6 f . . . . . . 
                    . . . f f f f f f . . . . . . . 
                    . . . . f f f . . . . . . . . . 
                    `,img`
                    . . . f f f f f . . . . . . . . 
                    . f f f f f f f f f . . . . . . 
                    . f f f f f f c f f f . . . . . 
                    f f f f c f f f c f f . . . . . 
                    f c f f c c f f f c c f f . . . 
                    f c c f f f f e f f f f f . . . 
                    f f f f f f f e e f f f . . . . 
                    f f e e f b f e e f f . . . . . 
                    . f e 4 e 1 f 4 4 f . . . . . . 
                    . f f f e 4 4 4 4 f . . . c c . 
                    . . f e e e e e f f . c c b b c 
                    . . e 4 4 e 7 7 7 f c c b b c . 
                    . . e 4 4 e 7 7 7 f . c c c . . 
                    . . f e e f 6 6 6 f . . . . . . 
                    . . . f f f f f f . . . . . . . 
                    . . . . f f f . . . . . . . . . 
                    `,img`
                    . . . f f f f f . . . . . . . . 
                    . f f f f f f f f f . . . . . . 
                    . f f f f f f c f f f . . . . . 
                    f f f f c f f f c f f . . . . . 
                    f c f f c c f f f c c f f . . . 
                    f c c f f f f e f f f f f . . . 
                    f f f f f f f e e f f f . . . . 
                    f f e e f b f e e f f . . . . . 
                    . f e 4 e 1 f 4 4 f . . . . . . 
                    . f f f e 4 4 4 4 f . . . . . . 
                    . . f e e e e e f f . c c c . . 
                    . . e 4 4 e 7 7 7 f c c b b b . 
                    . . e 4 4 e 7 7 7 f . c c c c c 
                    . . f e e f 6 6 6 f . . . . . . 
                    . . . f f f f f f . . . . . . . 
                    . . . . f f f . . . . . . . . . 
                    `],
                100,
                false
                )
                katana3 = sprites.createProjectileFromSprite(img`
                    . . c . . . . . . . 
                    . . c c c c c c c c 
                    c c c d d d d d d . 
                    . . c c c c c c . . 
                    . . c . . . . . . . 
                    `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), 0, -100)
                katana3.setKind(SpriteKind.sword3)
                scene.cameraShake(1, 100)
                statusbar6 = statusbars.create(10, 2, StatusBarKind.Magic)
                statusbar6.max = piercing3
                statusbar6.value = piercing3
                statusbar6.attachToSprite(katana3, 2, 2)
                cooldown = 1
                pause(200)
                katana3.changeScale(0.5, ScaleAnchor.Middle)
                katana3.x += 5
                katana3.y += 5
                pause(200)
                cooldown = 0
                statusbar11.value += -15
            }
        } else {
            pauseUntil(() => cooldown == 0)
        }
    } else if (Direction3 == "D") {
        if (cooldown == 0) {
            if (statusbar2.value < 5) {
            	
            } else {
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
                assets.animation`myAnim0`,
                100,
                false
                )
                pause(200)
                cooldown = 1
                katana3 = sprites.createProjectileFromSprite(img`
                    . . . . . . . c . . 
                    c c c c c c c c . . 
                    . d d d d d d c c c 
                    . . c c c c c c . . 
                    . . . . . . . c . . 
                    `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), 0, 100)
                katana3.setKind(SpriteKind.sword3)
                scene.cameraShake(1, 100)
                statusbar6 = statusbars.create(10, 2, StatusBarKind.Magic)
                statusbar6.max = piercing3
                statusbar6.value = piercing3
                statusbar6.attachToSprite(katana3, 2, 2)
                katana3.changeScale(0.5, ScaleAnchor.Middle)
                katana3.x += -5
                katana3.y += 5
                pause(200)
                cooldown = 0
                statusbar11.value += -15
            }
        } else {
            pauseUntil(() => cooldown == 0)
        }
    }
    if (Direction3 == "R") {
        if (cooldown == 0) {
            if (statusbar2.value < 5) {
            	
            } else {
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
                [img`
                    . . . f f f f f . . . . . . . . 
                    . f f f f f f f f f . . . . . . 
                    . f f f f f f c f f f . . . . . 
                    f f f f c f f f c f f . . . . . 
                    f c f f c c f f f c c f f . . . 
                    f c c f f f f e f f f f f . . . 
                    f f f f f f f e e f f f . . . . 
                    f f e e f b f e e f f . . . . . 
                    . f e 4 e 1 f 4 4 f . . . . c c 
                    . f f f e 4 4 4 4 f . . . c b c 
                    . . f e e e e e f f . c c b b c 
                    . . e 4 4 e 7 7 7 f c c b b c . 
                    . . e 4 4 e 7 7 7 f . c c c . . 
                    . . f e e f 6 6 6 f . . . . . . 
                    . . . f f f f f f . . . . . . . 
                    . . . . f f f . . . . . . . . . 
                    `,img`
                    . . . f f f f f . . . . . . . . 
                    . f f f f f f f f f . . . . . . 
                    . f f f f f f c f f f . . . . . 
                    f f f f c f f f c f f . . . . . 
                    f c f f c c f f f c c f f . . . 
                    f c c f f f f e f f f f f . . . 
                    f f f f f f f e e f f f . . . . 
                    f f e e f b f e e f f . . . . . 
                    . f e 4 e 1 f 4 4 f . . . . . . 
                    . f f f e 4 4 4 4 f . . . c c . 
                    . . f e e e e e f f . c c b b c 
                    . . e 4 4 e 7 7 7 f c c b b c . 
                    . . e 4 4 e 7 7 7 f . c c c . . 
                    . . f e e f 6 6 6 f . . . . . . 
                    . . . f f f f f f . . . . . . . 
                    . . . . f f f . . . . . . . . . 
                    `,img`
                    . . . f f f f f . . . . . . . . 
                    . f f f f f f f f f . . . . . . 
                    . f f f f f f c f f f . . . . . 
                    f f f f c f f f c f f . . . . . 
                    f c f f c c f f f c c f f . . . 
                    f c c f f f f e f f f f f . . . 
                    f f f f f f f e e f f f . . . . 
                    f f e e f b f e e f f . . . . . 
                    . f e 4 e 1 f 4 4 f . . . . . . 
                    . f f f e 4 4 4 4 f . . . . . . 
                    . . f e e e e e f f . c c c . . 
                    . . e 4 4 e 7 7 7 f c c b b b . 
                    . . e 4 4 e 7 7 7 f . c c c c c 
                    . . f e e f 6 6 6 f . . . . . . 
                    . . . f f f f f f . . . . . . . 
                    . . . . f f f . . . . . . . . . 
                    `],
                100,
                false
                )
                katana3 = sprites.createProjectileFromSprite(img`
                    . . c . . . . . . . 
                    . . c c c c c c c c 
                    c c c d d d d d d . 
                    . . c c c c c c . . 
                    . . c . . . . . . . 
                    `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), 150, 0)
                katana3.setKind(SpriteKind.sword3)
                scene.cameraShake(1, 100)
                statusbar6 = statusbars.create(10, 2, StatusBarKind.Magic)
                statusbar6.max = piercing3
                statusbar6.value = piercing3
                statusbar6.attachToSprite(katana3, 2, 2)
                cooldown = 1
                pause(200)
                katana3.changeScale(0.5, ScaleAnchor.Middle)
                katana3.x += 5
                katana3.y += 5
                pause(200)
                cooldown = 0
                statusbar11.value += -15
            }
        } else {
            pauseUntil(() => cooldown == 0)
        }
    } else if (Direction3 == "L") {
        if (cooldown == 0) {
            if (statusbar2.value < 5) {
            	
            } else {
                animation.runImageAnimation(
                mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
                assets.animation`myAnim0`,
                100,
                false
                )
                pause(200)
                cooldown = 1
                katana3 = sprites.createProjectileFromSprite(img`
                    . . . . . . . c . . 
                    c c c c c c c c . . 
                    . d d d d d d c c c 
                    . . c c c c c c . . 
                    . . . . . . . c . . 
                    `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), -150, 0)
                katana3.setKind(SpriteKind.sword3)
                scene.cameraShake(1, 100)
                statusbar6 = statusbars.create(10, 2, StatusBarKind.Magic)
                statusbar6.max = piercing3
                statusbar6.value = piercing3
                statusbar6.attachToSprite(katana3, 2, 2)
                katana3.changeScale(0.5, ScaleAnchor.Middle)
                katana3.x += -5
                katana3.y += 5
                pause(200)
                cooldown = 0
                statusbar11.value += -15
            }
        } else {
            pauseUntil(() => cooldown == 0)
        }
    }
})
sprites.onOverlap(SpriteKind.sword1, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    statusbar6.value += -1
    info.changeCountdownBy(0.5)
    scene.cameraShake(2, 500)
    EnemyAchievement += 1
    ExpP1 += 1
    coinSprite = sprites.createProjectileFromSprite(img`
        . . b b b . . 
        . b 5 5 5 b . 
        b 5 d 3 d 5 b 
        b 5 3 5 1 5 b 
        c 5 3 5 1 d c 
        c 5 d 1 d d c 
        . f d d d f . 
        . . f f f . . 
        `, sprite, 0, 0)
    coinSprite.setKind(SpriteKind.coin)
    coinSprite.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 150)
    animation.runImageAnimation(
    coinSprite,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    100,
    true
    )
})
controller.player3.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    Direction3 = "R"
})
controller.player3.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    Direction3 = "L"
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    tiles.setCurrentTilemap(tilemap`level12`)
    scene.setBackgroundColor(15)
    TimesPlayed += 1
})
sprites.onOverlap(SpriteKind.sword3, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    statusbar6.value += -1
    info.changeCountdownBy(0.5)
    scene.cameraShake(2, 500)
    EnemyAchievement += 1
    ExpP3 += 1
    coinSprite = sprites.createProjectileFromSprite(img`
        . . b b b . . 
        . b 5 5 5 b . 
        b 5 d 3 d 5 b 
        b 5 3 5 1 5 b 
        c 5 3 5 1 d c 
        c 5 d 1 d d c 
        . f d d d f . 
        . . f f f . . 
        `, sprite, 0, 0)
    coinSprite.setKind(SpriteKind.coin3)
    coinSprite.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), 150)
    animation.runImageAnimation(
    coinSprite,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    100,
    true
    )
})
function summon_enemys () {
    if (boss_active == 0) {
        if (roundPlay == true) {
            if (Difficulty == 1) {
                for (let index = 0; index < Rounds + 0; index++) {
                    Ghost_Zombie = sprites.create(img`
                        ........................
                        ........................
                        ........................
                        ........................
                        ..........ffff..........
                        ........ff1111ff........
                        .......fb111111bf.......
                        .......f11111111f.......
                        ......fd11111111df......
                        ......fd11111111df......
                        ......fddd1111dddf......
                        ......fbdbfddfbdbf......
                        ......fcdcf11fcdcf......
                        .......fb111111bf.......
                        ......fffcdb1bdffff.....
                        ....fc111cbfbfc111cf....
                        ....f1b1b1ffff1b1b1f....
                        ....fbfbffffffbfbfbf....
                        .........ffffff.........
                        ...........fff..........
                        ........................
                        ........................
                        ........................
                        ........................
                        `, SpriteKind.Enemy)
                    if (map == 1) {
                        tiles.placeOnRandomTile(Ghost_Zombie, assets.tile`tile2`)
                    } else if (map == 2) {
                        tiles.placeOnRandomTile(Ghost_Zombie, assets.tile`tile6`)
                    } else if (map == 0) {
                        tiles.placeOnRandomTile(Ghost_Zombie, assets.tile`tile7`)
                    } else if (map == 3) {
                        tiles.placeOnRandomTile(Ghost_Zombie, assets.tile`myTile2`)
                    } else if (map == 4) {
                        tiles.placeOnRandomTile(Ghost_Zombie, assets.tile`myTile4`)
                    }
                    pause(200)
                    if (multiplayet == 1) {
                        Ghost_Zombie.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), randint(30, 65))
                    } else if (multiplayet == 2) {
                        player_follow = randint(1, 2)
                        if (player_follow == 1) {
                            Ghost_Zombie.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), randint(30, 65))
                        } else if (player_follow == 2) {
                            Ghost_Zombie.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), randint(30, 65))
                        }
                    } else if (multiplayet == 3) {
                        player_follow = randint(1, 3)
                        if (player_follow == 1) {
                            Ghost_Zombie.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), randint(30, 65))
                        } else if (player_follow == 2) {
                            Ghost_Zombie.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), randint(30, 65))
                        } else if (player_follow == 3) {
                            Ghost_Zombie.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), randint(30, 65))
                        }
                    }
                }
                pauseUntil(() => Kills_per_round == 0)
                Rounds += 1
                Kills_per_round = Rounds
            } else if (Difficulty == 2) {
                for (let index = 0; index < Rounds + 1; index++) {
                    Ghost_Zombie = sprites.create(img`
                        ........................
                        ........................
                        ........................
                        ........................
                        ..........ffff..........
                        ........ff1111ff........
                        .......fb111111bf.......
                        .......f11111111f.......
                        ......fd11111111df......
                        ......fd11111111df......
                        ......fddd1111dddf......
                        ......fbdbfddfbdbf......
                        ......fcdcf11fcdcf......
                        .......fb111111bf.......
                        ......fffcdb1bdffff.....
                        ....fc111cbfbfc111cf....
                        ....f1b1b1ffff1b1b1f....
                        ....fbfbffffffbfbfbf....
                        .........ffffff.........
                        ...........fff..........
                        ........................
                        ........................
                        ........................
                        ........................
                        `, SpriteKind.Enemy)
                    if (map == 1) {
                        tiles.placeOnRandomTile(Ghost_Zombie, assets.tile`tile2`)
                    } else if (map == 2) {
                        tiles.placeOnRandomTile(Ghost_Zombie, assets.tile`tile6`)
                    } else if (map == 0) {
                        tiles.placeOnRandomTile(Ghost_Zombie, assets.tile`tile7`)
                    } else if (map == 3) {
                        tiles.placeOnRandomTile(Ghost_Zombie, assets.tile`myTile2`)
                    } else if (map == 4) {
                        tiles.placeOnRandomTile(Ghost_Zombie, assets.tile`myTile4`)
                    }
                    pause(200)
                    if (multiplayet == 1) {
                        Ghost_Zombie.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), randint(30, 65))
                    } else if (multiplayet == 2) {
                        player_follow = randint(1, 2)
                        if (player_follow == 1) {
                            Ghost_Zombie.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), randint(30, 65))
                        } else if (player_follow == 2) {
                            Ghost_Zombie.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), randint(30, 65))
                        }
                    } else if (multiplayet == 3) {
                        player_follow = randint(1, 3)
                        if (player_follow == 1) {
                            Ghost_Zombie.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), randint(30, 65))
                        } else if (player_follow == 2) {
                            Ghost_Zombie.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), randint(30, 65))
                        } else if (player_follow == 3) {
                            Ghost_Zombie.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), randint(30, 65))
                        }
                    }
                }
                pauseUntil(() => Kills_per_round == 0)
                Rounds += 1
                Kills_per_round = Rounds
            } else if (Difficulty == 3) {
                for (let index = 0; index < Rounds + 2; index++) {
                    Ghost_Zombie = sprites.create(img`
                        ........................
                        ........................
                        ........................
                        ........................
                        ..........ffff..........
                        ........ff1111ff........
                        .......fb111111bf.......
                        .......f11111111f.......
                        ......fd11111111df......
                        ......fd11111111df......
                        ......fddd1111dddf......
                        ......fbdbfddfbdbf......
                        ......fcdcf11fcdcf......
                        .......fb111111bf.......
                        ......fffcdb1bdffff.....
                        ....fc111cbfbfc111cf....
                        ....f1b1b1ffff1b1b1f....
                        ....fbfbffffffbfbfbf....
                        .........ffffff.........
                        ...........fff..........
                        ........................
                        ........................
                        ........................
                        ........................
                        `, SpriteKind.Enemy)
                    if (map == 1) {
                        tiles.placeOnRandomTile(Ghost_Zombie, assets.tile`tile2`)
                    } else if (map == 2) {
                        tiles.placeOnRandomTile(Ghost_Zombie, assets.tile`tile6`)
                    } else if (map == 0) {
                        tiles.placeOnRandomTile(Ghost_Zombie, assets.tile`tile7`)
                    } else if (map == 3) {
                        tiles.placeOnRandomTile(Ghost_Zombie, assets.tile`myTile2`)
                    } else if (map == 4) {
                        tiles.placeOnRandomTile(Ghost_Zombie, assets.tile`myTile4`)
                    }
                    pause(200)
                    if (multiplayet == 1) {
                        Ghost_Zombie.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), randint(30, 65))
                    } else if (multiplayet == 2) {
                        player_follow = randint(1, 2)
                        if (player_follow == 1) {
                            Ghost_Zombie.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), randint(30, 65))
                        } else if (player_follow == 2) {
                            Ghost_Zombie.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), randint(30, 65))
                        }
                    } else if (multiplayet == 3) {
                        player_follow = randint(1, 3)
                        if (player_follow == 1) {
                            Ghost_Zombie.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), randint(30, 65))
                        } else if (player_follow == 2) {
                            Ghost_Zombie.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), randint(30, 65))
                        } else if (player_follow == 3) {
                            Ghost_Zombie.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), randint(30, 65))
                        }
                    }
                }
                pauseUntil(() => Kills_per_round == 0)
                Rounds += 1
                Kills_per_round = Rounds
            }
        }
    }
}
sprites.onOverlap(SpriteKind.sword2, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    statusbar6.value += -1
    info.changeCountdownBy(0.5)
    scene.cameraShake(2, 500)
    EnemyAchievement += 1
    ExpP2 += 1
    coinSprite = sprites.createProjectileFromSprite(img`
        . . b b b . . 
        . b 5 5 5 b . 
        b 5 d 3 d 5 b 
        b 5 3 5 1 5 b 
        c 5 3 5 1 d c 
        c 5 d 1 d d c 
        . f d d d f . 
        . . f f f . . 
        `, sprite, 0, 0)
    coinSprite.setKind(SpriteKind.coin2)
    coinSprite.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 150)
    animation.runImageAnimation(
    coinSprite,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    100,
    true
    )
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    tiles.setCurrentTilemap(tilemap`level18`)
    info.stopCountdown()
    Rounds = 0
    for (let index = 0; index < 100; index++) {
        sprites.destroyAllSpritesOfKind(SpriteKind.zombieBoss)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.coin)
    }
    if (multiplayet == 1) {
        sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    } else if (multiplayet == 2) {
        sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
        sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
    } else if (multiplayet == 3) {
        sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
        sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
        sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)))
    }
    if (multiplayet == 1) {
        game.splash("" + username + "   xp:" + ExpP1 + "  level:" + P1Level + "  round:" + info.score(), "HACKS: " + HacksONOff + "  Endless:" + forever2)
    } else if (multiplayet == 2) {
        game.splash("" + username + "   xp:" + ExpP1 + "  level:" + P1Level + "  round:" + info.score(), "HACKS: " + HacksONOff + "  Endless:" + forever2)
        game.splash("" + username2 + "   xp:" + ExpP2 + "  level:" + P2Level + "  round:" + info.score(), "HACKS: " + HacksONOff + "  Endless:" + forever2)
    } else if (multiplayet == 3) {
        game.splash("" + username + "   xp:" + ExpP1 + "  level:" + P1Level + "  round:" + info.score(), "HACKS: " + HacksONOff + "  Endless:" + forever2)
        game.splash("" + username2 + "   xp:" + ExpP2 + "  level:" + P2Level + "  round:" + info.score(), "HACKS: " + HacksONOff + "  Endless:" + forever2)
        game.splash("" + username3 + "   xp:" + ExpP3 + "  level:" + P3Level + "  round:" + info.score(), "HACKS: " + HacksONOff + "  Endless:" + forever2)
    }
    game.splash("Special thanks to Kamdyn Albrecht for endorsing ", "this project (he gave me a dollar)")
    play_game()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.zombieBoss, function (sprite, otherSprite) {
    if (Vamperic == true) {
        Heal = randint(1, 3)
        if (Heal == 1) {
            statusbar.value += -10
            statusbar3.value += -20
            otherSprite.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
            scene.cameraShake(2, 200)
            Kills_per_round += -1
            pause(500)
        } else if (Heal == 2) {
            statusbar.value += 10
            statusbar3.value += -20
            otherSprite.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0)
            scene.cameraShake(2, 200)
            Kills_per_round += -1
            pause(500)
        } else {
        	
        }
    } else {
        statusbar.value += -10
        pause(500)
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    Rounds = 9
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Direction = "D"
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    Direction2 = "L"
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Direction = "U"
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    Kills_per_round += -1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Direction = "R"
})
sprites.onOverlap(SpriteKind.sword1, SpriteKind.zombieBoss, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    statusbar3.value += -5
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Vamperic == true) {
    	
    } else {
        if (Game_Start == "Y") {
            if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)) {
                if (Direction == "U") {
                    if (cooldown == 0) {
                        if (statusbar2.value < 5) {
                        	
                        } else {
                            animation.runImageAnimation(
                            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                            [img`
                                . . . . . . f f f f . . . . . . 
                                . . . . f f e e e e f f . . . . 
                                . . . f e e e f f e e e f . . . 
                                . . f f f f f 2 2 f f f f f . . 
                                . . f f e 2 e 2 2 e 2 e f f . . 
                                . . f e 2 f 2 f f 2 f 2 e f . . 
                                . . f f f 2 2 e e 2 2 f f f . . 
                                . f f e f 2 f e e f 2 f e f f . 
                                . f e e f f e e e e f e e e f . 
                                . . f e e e e e e e e e e f . . 
                                . . . f e e e e e e e e f . . . 
                                . . e 4 f f f f f f f f 4 e . . 
                                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                                . . 4 4 f 4 4 4 4 4 4 f c c c . 
                                . . . . . f f f f f f . c d c . 
                                . . . . . f f . . f f . c d . . 
                                `,img`
                                . . . . . . f f f f . . . . . . 
                                . . . . f f e e e e f f . . . . 
                                . . . f e e e f f e e e f . . . 
                                . . f f f f f 2 2 f f f f f . . 
                                . . f f e 2 e 2 2 e 2 e f f . . 
                                . . f e 2 f 2 f f 2 f 2 e f . . 
                                . . f f f 2 2 e e 2 2 f f f . . 
                                . f f e f 2 f e e f 2 f e f f . 
                                . f e e f f e e e e f e e e f . 
                                . . f e e e e e e e e e e f . . 
                                . . . f e e e e e e e e f . . . 
                                . . e 4 f f f f f f f f 4 e . . 
                                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                                . . 4 4 f 4 4 4 4 4 4 f c c c . 
                                . . . . . f f f f f f . c d c . 
                                . . . . . f f . . f f . . . . . 
                                `,img`
                                . . . . . . f f f f . . . . . . 
                                . . . . f f e e e e f f . . . . 
                                . . . f e e e f f e e e f . . . 
                                . . f f f f f 2 2 f f f f f . . 
                                . . f f e 2 e 2 2 e 2 e f f . . 
                                . . f e 2 f 2 f f 2 f 2 e f . . 
                                . . f f f 2 2 e e 2 2 f f f . . 
                                . f f e f 2 f e e f 2 f e f f . 
                                . f e e f f e e e e f e e e f . 
                                . . f e e e e e e e e e e f . . 
                                . . . f e e e e e e e e f . . . 
                                . . e 4 f f f f f f f f 4 e . . 
                                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                                . . 4 4 f 4 4 4 4 4 4 f c c c . 
                                . . . . . f f f f f f . . . . . 
                                . . . . . f f . . f f . . . . . 
                                `,img`
                                . . . . . . f f f f . . . . . . 
                                . . . . f f e e e e f f . . . . 
                                . . . f e e e f f e e e f . . . 
                                . . f f f f f 2 2 f f f f f . . 
                                . . f f e 2 e 2 2 e 2 e f f . . 
                                . . f e 2 f 2 f f 2 f 2 e f . . 
                                . . f f f 2 2 e e 2 2 f f f . . 
                                . f f e f 2 f e e f 2 f e f f . 
                                . f e e f f e e e e f e e e f . 
                                . . f e e e e e e e e e e f . . 
                                . . . f e e e e e e e e f . . . 
                                . . e 4 f f f f f f f f 4 e . . 
                                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                                . . 4 4 f 4 4 4 4 4 4 f . . . . 
                                . . . . . f f f f f f . . . . . 
                                . . . . . f f . . f f . . . . . 
                                `],
                            100,
                            false
                            )
                            katana = sprites.createProjectileFromSprite(img`
                                . c . . . 
                                . c d . . 
                                . c d c . 
                                . c d c . 
                                . c d c . 
                                . c d c . 
                                . c d c . 
                                c c c c c 
                                . . c . . 
                                . . c . . 
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, -100)
                            katana.setKind(SpriteKind.sword1)
                            scene.cameraShake(1, 100)
                            statusbar6 = statusbars.create(5, 1, StatusBarKind.Magic)
                            statusbar6.max = piercing
                            statusbar6.value = piercing
                            statusbar6.attachToSprite(katana, 2, 2)
                            cooldown = 1
                            pause(200)
                            katana.changeScale(0.5, ScaleAnchor.Middle)
                            katana.x += 5
                            katana.y += 5
                            pause(200)
                            cooldown = 0
                            statusbar2.value += -15
                        }
                    } else {
                        pauseUntil(() => cooldown == 0)
                    }
                } else if (Direction == "D") {
                    if (cooldown == 0) {
                        if (statusbar2.value < 5) {
                        	
                        } else {
                            animation.runImageAnimation(
                            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                            [img`
                                . . . . . . f f f f . . . . . . 
                                . . . . f f f 2 2 f f f . . . . 
                                . . . f f f 2 2 2 2 f f f . . . 
                                . . f f f e e e e e e f f f . . 
                                . . f f e 2 2 2 2 2 2 e e f . . 
                                . . f e 2 f f f f f f 2 e f . . 
                                . . f f f f e e e e f f f f . . 
                                . f f e f b f 4 4 f b f e f f . 
                                . f e e 4 1 f d d f 1 4 e e f . 
                                . . f e e d d d d d d e e f . . 
                                . . . f e e 4 4 4 4 e e f . . . 
                                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                                . c c c f 4 4 5 5 4 4 f 4 4 . . 
                                . . . . . f f f f f f . . . . . 
                                . . . . . f f . . f f . . . . . 
                                `,img`
                                . . . . . . f f f f . . . . . . 
                                . . . . f f f 2 2 f f f . . . . 
                                . . . f f f 2 2 2 2 f f f . . . 
                                . . f f f e e e e e e f f f . . 
                                . . f f e 2 2 2 2 2 2 e e f . . 
                                . . f e 2 f f f f f f 2 e f . . 
                                . . f f f f e e e e f f f f . . 
                                . f f e f b f 4 4 f b f e f f . 
                                . f e e 4 1 f d d f 1 4 e e f . 
                                . . f e e d d d d d d e e f . . 
                                . . . f e e 4 4 4 4 e e f . . . 
                                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                                . c c c f 4 4 5 5 4 4 f 4 4 . . 
                                . c . . . f f f f f f . . . . . 
                                . . . . . f f . . f f . . . . . 
                                `,img`
                                . . . . . . f f f f . . . . . . 
                                . . . . f f f 2 2 f f f . . . . 
                                . . . f f f 2 2 2 2 f f f . . . 
                                . . f f f e e e e e e f f f . . 
                                . . f f e 2 2 2 2 2 2 e e f . . 
                                . . f e 2 f f f f f f 2 e f . . 
                                . . f f f f e e e e f f f f . . 
                                . f f e f b f 4 4 f b f e f f . 
                                . f e e 4 1 f d d f 1 4 e e f . 
                                . . f e e d d d d d d e e f . . 
                                . . . f e e 4 4 4 4 e e f . . . 
                                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                                . c c c f 4 4 5 5 4 4 f 4 4 . . 
                                . c d c . f f f f f f . . . . . 
                                . c d . . f f . . f f . . . . . 
                                `],
                            100,
                            false
                            )
                            pause(200)
                            cooldown = 1
                            katana = sprites.createProjectileFromSprite(img`
                                . . c . . 
                                . . c . . 
                                c c c c c 
                                . c d c . 
                                . c d c . 
                                . c d c . 
                                . c d c . 
                                . c d c . 
                                . . d c . 
                                . . . c . 
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 0, 100)
                            katana.setKind(SpriteKind.sword1)
                            scene.cameraShake(1, 100)
                            statusbar6 = statusbars.create(5, 1, StatusBarKind.Magic)
                            statusbar6.max = piercing
                            statusbar6.value = piercing
                            statusbar6.attachToSprite(katana, 2, 2)
                            katana.changeScale(0.5, ScaleAnchor.Middle)
                            katana.x += -5
                            katana.y += 5
                            pause(200)
                            cooldown = 0
                            statusbar2.value += -15
                        }
                    } else {
                        pauseUntil(() => cooldown == 0)
                    }
                }
                if (Direction == "R") {
                    if (cooldown == 0) {
                        if (statusbar2.value < 5) {
                        	
                        } else {
                            animation.runImageAnimation(
                            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                            [img`
                                . . . . . . . . . . . . . . . . 
                                . . . . f f f f f f . . . . . . 
                                . . f f e e e e f 2 f . . . . . 
                                . f f e e e e f 2 2 2 f . . . . 
                                . f e e e f f e e e e f . . . c 
                                . f f f f e e 2 2 2 2 e f . c d 
                                . f e 2 2 2 f f f f e 2 f c d d 
                                f f f f f f f e e e f f c d d c 
                                f f e 4 4 e b f 4 4 e c d d c . 
                                f e e 4 d 4 1 f d d e c d c . . 
                                . f e e e 4 d d d e d c c c . . 
                                . . f f e e 4 4 e 4 d d e . . . 
                                . . . f 2 2 2 2 4 4 e e . . . . 
                                . . . f 2 2 2 2 e 2 f . . . . . 
                                . . . f 4 4 4 4 5 5 f . . . . . 
                                . . . . f f f f f f . . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . f f f . . . . . . 
                                . . . . f f f f f 2 f . . . . . 
                                . . f f e e e e e 2 2 f f . . . 
                                . f f e e e e e e 2 2 2 f f . . 
                                . f e e e e f f f e e e e f . . 
                                . f f f f f e e e 2 2 2 2 e f . 
                                f f f e 2 2 2 f f f f f e 2 f . 
                                f f f f f f f f f e e e f f f . 
                                f e f e 4 4 e b b f 4 4 e e f . 
                                . f e e 4 d 4 b b f d d e f . . 
                                . . f e e e 4 d d d d d f e e c 
                                . . . f 2 2 2 2 2 2 2 e e d d c 
                                . . . f 4 4 4 4 4 5 e 4 4 d d c 
                                . . . f f f f f f f f e e e e . 
                                . . . f f f . . . f f . . . . . 
                                `,img`
                                . . . . . . . f f . . . . . . . 
                                . . . . f f f f 2 f f . . . . . 
                                . . f f e e e e f 2 f f . . . . 
                                . f f e e e e e f 2 2 f f . . . 
                                . f e e e e f f e e e e f . . . 
                                . f f f f f e e 2 2 2 2 e f . . 
                                f f f e 2 2 2 f f f f e 2 f . . 
                                f f f f f f f f e e e f f f . . 
                                f e f e 4 4 e b f 4 4 e e f . . 
                                . f e e 4 d 4 b f d d e f . . . 
                                . . f e e e 4 d d d e e . c . . 
                                . . . f 2 2 2 2 e e d d e c c c 
                                . . . f 4 4 4 e 4 4 d d e c d d 
                                . . . f f f f f e e e e . c c c 
                                . . f f f f f f f f . . . c . . 
                                . . f f f . . f f . . . . . . . 
                                `,img`
                                . . . . . . . f f . . . . . . . 
                                . . . . f f f f 2 f f . . . . . 
                                . . f f e e e e f 2 f f . . . . 
                                . f f e e e e e f 2 2 f f . . . 
                                . f e e e e f f e e e e f . . . 
                                . f f f f f e e 2 2 2 2 e f . . 
                                f f f e 2 2 2 f f f f e 2 f . . 
                                f f f f f f f f e e e f f f . . 
                                f e f e 4 4 e b f 4 4 e e f . . 
                                . f e e 4 d 4 b f d d e f . . . 
                                . . f e e e 4 d d d e e . . . . 
                                . . . f 2 2 2 2 e e d d e . . . 
                                . . . f 4 4 4 e 4 4 d d e . . . 
                                . . . f f f f f e e e e . . . . 
                                . . f f f f f f f f . . . . . . 
                                . . f f f . . f f . . . . . . . 
                                `],
                            100,
                            false
                            )
                            katana = sprites.createProjectileFromSprite(img`
                                . . c . . . . . . . 
                                . . c c c c c c c c 
                                c c c d d d d d d . 
                                . . c c c c c c . . 
                                . . c . . . . . . . 
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 120, 0)
                            katana.setKind(SpriteKind.sword1)
                            scene.cameraShake(1, 100)
                            statusbar6 = statusbars.create(5, 1, StatusBarKind.Magic)
                            statusbar6.max = piercing
                            statusbar6.value = piercing
                            statusbar6.attachToSprite(katana, 2, 2)
                            cooldown = 1
                            pause(200)
                            katana.changeScale(0.5, ScaleAnchor.Middle)
                            katana.x += 5
                            katana.y += 5
                            pause(200)
                            cooldown = 0
                            statusbar2.value += -15
                        }
                    } else {
                        pauseUntil(() => cooldown == 0)
                    }
                } else if (Direction == "L") {
                    if (cooldown == 0) {
                        if (statusbar2.value < 5) {
                        	
                        } else {
                            animation.runImageAnimation(
                            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
                            [img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . f f f f f f . . . . 
                                . . . . . f 2 f e e e e f f . . 
                                . . . . f 2 2 2 f e e e e f f . 
                                c . . . f e e e e f f e e e f . 
                                d c . f e 2 2 2 2 e e f f f f . 
                                d d c f 2 e f f f f 2 2 2 e f . 
                                c d d c f f e e e f f f f f f f 
                                . c d d c e 4 4 f b e 4 4 e f f 
                                . . c d c e d d f 1 4 d 4 e e f 
                                . . c c c d e d d d 4 e e e f . 
                                . . . e d d 4 e 4 4 e e f f . . 
                                . . . . e e 4 4 2 2 2 2 f . . . 
                                . . . . . f 2 e 2 2 2 2 f . . . 
                                . . . . . f 5 5 4 4 4 4 f . . . 
                                . . . . . . f f f f f f . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . f f f . . . . . . . 
                                . . . . . f 2 f f f f f . . . . 
                                . . . f f 2 2 e e e e e f f . . 
                                . . f f 2 2 2 e e e e e e f f . 
                                . . f e e e e f f f e e e e f . 
                                . f e 2 2 2 2 e e e f f f f f . 
                                . f 2 e f f f f f 2 2 2 e f f f 
                                . f f f e e e f f f f f f f f f 
                                . f e e 4 4 f b b e 4 4 e f e f 
                                . . f e d d f b b 4 d 4 e e f . 
                                c e e f d d d d d 4 e e e f . . 
                                c d d e e 2 2 2 2 2 2 2 f . . . 
                                c d d 4 4 e 5 4 4 4 4 4 f . . . 
                                . e e e e f f f f f f f f . . . 
                                . . . . . f f . . . f f f . . . 
                                `,img`
                                . . . . . . . f f . . . . . . . 
                                . . . . . f f 2 f f f f . . . . 
                                . . . . f f 2 f e e e e f f . . 
                                . . . f f 2 2 f e e e e e f f . 
                                . . . f e e e e f f e e e e f . 
                                . . f e 2 2 2 2 e e f f f f f . 
                                . . f 2 e f f f f 2 2 2 e f f f 
                                . . f f f e e e f f f f f f f f 
                                . . f e e 4 4 f b e 4 4 e f e f 
                                . . . f e d d f b 4 d 4 e e f . 
                                . . c . e e d d d 4 e e e f . . 
                                c c c e d d e e 2 2 2 2 f . . . 
                                d d c e d d 4 4 e 4 4 4 f . . . 
                                c c c . e e e e f f f f f . . . 
                                . . c . . . f f f f f f f f . . 
                                . . . . . . . f f . . f f f . . 
                                `,img`
                                . . . . . . . f f . . . . . . . 
                                . . . . . f f 2 f f f f . . . . 
                                . . . . f f 2 f e e e e f f . . 
                                . . . f f 2 2 f e e e e e f f . 
                                . . . f e e e e f f e e e e f . 
                                . . f e 2 2 2 2 e e f f f f f . 
                                . . f 2 e f f f f 2 2 2 e f f f 
                                . . f f f e e e f f f f f f f f 
                                . . f e e 4 4 f b e 4 4 e f e f 
                                . . . f e d d f b 4 d 4 e e f . 
                                . . . . e e d d d 4 e e e f . . 
                                . . . e d d e e 2 2 2 2 f . . . 
                                . . . e d d 4 4 e 4 4 4 f . . . 
                                . . . . e e e e f f f f f . . . 
                                . . . . . . f f f f f f f f . . 
                                . . . . . . . f f . . f f f . . 
                                `],
                            100,
                            false
                            )
                            pause(200)
                            cooldown = 1
                            katana = sprites.createProjectileFromSprite(img`
                                . . . . . . . c . . 
                                c c c c c c c c . . 
                                . d d d d d d c c c 
                                . . c c c c c c . . 
                                . . . . . . . c . . 
                                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), -100, 0)
                            katana.setKind(SpriteKind.sword1)
                            scene.cameraShake(1, 100)
                            statusbar6 = statusbars.create(5, 1, StatusBarKind.Magic)
                            statusbar6.max = piercing
                            statusbar6.value = piercing
                            statusbar6.attachToSprite(katana, 2, 2)
                            katana.changeScale(0.5, ScaleAnchor.Middle)
                            katana.x += -5
                            katana.y += 5
                            pause(200)
                            cooldown = 0
                            statusbar2.value += -15
                        }
                    } else {
                        pauseUntil(() => cooldown == 0)
                    }
                }
            }
        }
    }
})
controller.combos.attachCombo("ablrup", function () {
    HacksONOff = true
    if (statusbar.value < 1000) {
        statusbar.max += 1000
        statusbar.value = 1000
        statusbar2.max += 1000
        statusbar2.value = 1000
    } else if (statusbar.value == 1000) {
        statusbar.value = 1000
        statusbar2.value = 1000
    }
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    Direction2 = "U"
})
// rubric #1 & #2
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (map == 1) {
        tiles.setCurrentTilemap(tilemap`level0`)
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(1, 9))
        scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
        map = 4
    } else if (map == 4) {
        tiles.setCurrentTilemap(tilemap`level4`)
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(37, 19))
        scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
        map = 1
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    boss_active = 0
    sprites.destroy(statusbar3)
    if (Difficulty == 1) {
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.One))) {
            if (Vamperic == true) {
            	
            } else {
                ExpP1 += 150
            }
        } else if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two)) && mp.isConnected(mp.playerSelector(mp.PlayerNumber.One))) {
            ExpP1 += 150
            ExpP2 += 150
        } else if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two)) && (mp.isConnected(mp.playerSelector(mp.PlayerNumber.One)) && mp.isConnected(mp.playerSelector(mp.PlayerNumber.Three)))) {
            ExpP1 += 150
            ExpP2 += 150
            ExpP3 += 150
        }
        sprites.destroy(DinoBoss, effects.blizzard, 1000)
        roundPlay = true
    } else if (Difficulty == 2) {
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.One))) {
            ExpP1 += 200
        } else if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two)) && mp.isConnected(mp.playerSelector(mp.PlayerNumber.One))) {
            ExpP1 += 200
            ExpP2 += 200
        } else if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two)) && (mp.isConnected(mp.playerSelector(mp.PlayerNumber.One)) && mp.isConnected(mp.playerSelector(mp.PlayerNumber.Three)))) {
            ExpP1 += 200
            ExpP2 += 200
            ExpP3 += 200
        }
        sprites.destroy(DinoBoss, effects.disintegrate, 200)
        boss_active = 0
        roundPlay = true
    } else {
        if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.One))) {
            ExpP1 += 200
        } else if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two)) && mp.isConnected(mp.playerSelector(mp.PlayerNumber.One))) {
            ExpP1 += 200
            ExpP2 += 200
        } else if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two)) && (mp.isConnected(mp.playerSelector(mp.PlayerNumber.One)) && mp.isConnected(mp.playerSelector(mp.PlayerNumber.Three)))) {
            ExpP1 += 200
            ExpP2 += 200
            ExpP3 += 200
        }
        sprites.destroy(DinoBoss, effects.disintegrate, 200)
        boss_active = 0
        roundPlay = true
    }
})
info.onCountdownEnd(function () {
    Kills_per_round = 0
    if (boss_active == 0) {
        info.startCountdown(20)
    }
})
statusbars.onStatusReached(StatusBarKind.Magic, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Fixed, 0, function (status) {
    sprites.destroy(statusbar6.spriteAttachedTo(), effects.disintegrate, 50)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    Direction2 = "D"
})
// rubric #1
// rubric #14
// rubric#16
function play_game () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.coin)
    tiles.setCurrentTilemap(tilemap`level22`)
    boss_active = 0
    roundPlay = true
    TimesPlayed = 0
    piercing = 1
    piercing2 = 1
    piercing3 = 1
    enemydeath = true
    forever2 = false
    map2 = true
    LevelAchievement = true
    HacksONOff = false
    story.setSoundEnabled(true)
    imageArray = [img`
        ..........666666666666..........
        ........6667777777777666........
        ......66677777777777777666......
        .....6677777779999777777766.....
        ....667777779966669977777766....
        ....677777799668866117777776....
        ...66777779966877861197777766...
        ...66777799668677686699777766...
        ...88777796688888888669777788...
        ...88777788888888888888777788...
        ...88977888679999997688877988...
        ...88977886777777777768877988...
        ...88997777777777777777779988...
        ...88799777777777777777711788...
        ...88679997777777777779117688...
        ..cc866679999999999999976668cc..
        .ccbc6666679999999999766666cbcc.
        .fcbcc66666666666666666666ccbcf.
        .fcbbcc666666666666666666ccbdcf.
        .f8bbbccc66666666666666cccbddcf.
        .f8cbbbbccccccccccccccccbdddbcf.
        .f8ccbbbbbccccccccccccb111ddccf.
        .f6ccccbbbddddddddddddd111dcccf.
        .f6ccccccbbddddddddddddddbbcccf.
        .f6cccccccccccccbbbbbbbbbdbcccf.
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..ff6ccccccccbbbbbbbbbbbddbcff..
        ...ff6cccccccbbbbbbbbbbbddbff...
        ....ffcccccccbbbbbbbbbbbdbff....
        ......ffccccbbbbbbbbbbbbff......
        ........ffffffffffffffff........
        `, img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ..........888888888888..........
        ........8887777777777888........
        ......88877666666666677888......
        .....8877666667777666667788.....
        ....887666667788887766666788....
        ....866666677888888996666678....
        ...88666667788877889976666688...
        ...88666677888677688877666688...
        ...88666778888888888887766688...
        ...88667788888888888888776688...
        ..cc866788866777777668887668cc..
        .ccbc8668866666666666688668cbcc.
        .fcbcc86666666666666666668ccbcf.
        .fcbbcc886666666666666688ccbdcf.
        .f8bbbccc88888888888888cccbddcf.
        .f8cbbbbccccccccccccccccbdddbcf.
        .f8ccbbbbbccccccccccccb11dddccf.
        .f6ccccbbbdddddddddddd111ddcccf.
        .f6ccccccbbddddddddddd11dbbcccf.
        .f6cccccccccccccbbbbbbbbbdbcccf.
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..ff6ccccccccbbbbbbbbbbbddbcff..
        ...ff6cccccccbbbbbbbbbbbddbff...
        ....ffcccccccbbbbbbbbbbbdbff....
        ......ffccccbbbbbbbbbbbbff......
        ........ffffffffffffffff........
        `, img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        .c66444444444c66e4e44e44e44ffffe66c44444444466c.
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
        ....644444444c66f4e44e44e44e44ee66c444444446....
        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
        `]
    game.splash("Zombies made by Kaedyn", "and Brandon")
    multiplayet = game.askForNumber("how many players 1 - 3", 1)
    story.printCharacterText("Skip info?")
    story.showPlayerChoices("Yes", "No")
    if (story.checkLastAnswer("Yes")) {
        story.printCharacterText("Endless?", "SYSTEM")
        story.showPlayerChoices("Yes", "No")
    } else if (story.checkLastAnswer("No")) {
        story.printCharacterText("player 1 = Normal, player 2 = -Hp +Energy, player 3 = -Energy +Hp ")
        story.printCharacterText("WASD to move and space bar to shoot, and b to heal", "Game")
        story.printCharacterText("Endless?", "SYSTEM")
        story.showPlayerChoices("Yes", "No")
    }
    if (story.checkLastAnswer("Yes")) {
        forever2 = true
        Game_Start = "N"
        enemydeath = true
        map = 1
        achievements.create("Started Game!", 1, "GAME", img`
            ........................
            ........................
            ........................
            ........................
            .........fffff..........
            .......ffb1111ff........
            ......fb1111111bf.......
            ......f111111111f.......
            .....ffff1111111df......
            ....fb111c1dd111df......
            ....ffb1b1fdcf11bf......
            .....ffbfbfb11111f......
            ......ffffcfdb1b1f......
            .......fcccfcfbfbf......
            ........ffffffffff......
            .........ffffff.........
            .........ffffff.........
            .....f..fffffff.........
            .....fffffffff..........
            ......fffffff...........
            ........................
            ........................
            ........................
            ........................
            `)
        pause(3500)
        achievements.cancel()
        if (blockSettings.exists("Played")) {
            ExpP1 = blockSettings.readNumber("P1Exp")
            ExpP2 = blockSettings.readNumber("P2Exp")
            ExpP3 = blockSettings.readNumber("P3Exp")
            P1Level = blockSettings.readNumber("LevelP1")
            P2Level = blockSettings.readNumber("LevelP2")
            P3Level = blockSettings.readNumber("LevelP3")
            Xp_per_Level = blockSettings.readNumber("Xp_per_Level")
            EnemyAchievement = blockSettings.readNumber("EnemyAchievement")
            Xp_per_level2 = blockSettings.readNumber("Xp_per_Level2")
            Xp_per_level3 = blockSettings.readNumber("Xp_per_Level3")
        } else {
            P1Level = 1
            P2Level = 1
            P3Level = 1
            Xp_per_Level = 50
            Xp_per_level2 = 50
            Xp_per_level3 = 50
            EnemyAchievement = 0
        }
        pierce_upg_price = 10
        if (multiplayet == 1) {
            username = game.askForString("Username", 7)
        } else if (multiplayet == 2) {
            username = game.askForString("Username for player 1", 7)
            username2 = game.askForString("Username for player 2", 7)
        } else if (multiplayet == 3) {
            username = game.askForString("Username for player 1", 7)
            username2 = game.askForString("Username for player 2", 7)
            username3 = game.askForString("Username for player 3", 7)
        }
        music.play(music.stringPlayable("F C G F E A F D ", 133), music.PlaybackMode.LoopingInBackground)
        Difficulty = game.askForNumber("Difficulty select, 1-3", 1)
        Rounds = 1
        myMinimap = minimap.minimap(MinimapScale.Original, 2, 15)
        story.printCharacterText("Skip Player lvl an xp info?")
        story.showPlayerChoices("Yes", "no")
        if (story.checkLastAnswer("Yes")) {
            Kills_per_round = Rounds
            info.startCountdown(20)
            HowManyPlayers()
            tiles.setCurrentTilemap(tilemap`level4`)
            scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
            Game_Start = "Y"
        } else if (story.checkLastAnswer("no")) {
            if (multiplayet == 1) {
                story.printCharacterText("Charater 1 Level: " + ("" + P1Level + (" Charater 1 XP: " + ("" + ExpP1 + "/" + Xp_per_Level + ("     " + "piercing:" + "" + piercing)))))
            } else if (multiplayet == 2) {
                story.printCharacterText("Charater 1 Level: " + ("" + P1Level + (" Charater 1 XP: " + ("" + ExpP1 + "/" + Xp_per_Level + ("     " + "piercing:" + "" + piercing)))))
                pause(2000)
                story.printCharacterText("Charater 2 level: " + ("" + P2Level + (" Charater 2 XP:" + ("" + ExpP2 + "/" + Xp_per_level2 + ("     " + "piercing:" + "" + piercing)))))
            } else if (multiplayet == 3) {
                story.printCharacterText("Charater 1 Level: " + ("" + P1Level + (" Charater 1 XP: " + ("" + ExpP1 + "/" + Xp_per_Level + ("     " + "piercing:" + "" + piercing)))))
                pause(2000)
                story.printCharacterText("Charater 2 level: " + ("" + P2Level + (" Charater 2 XP:" + ("" + ExpP2 + "/" + Xp_per_level2 + ("     " + "piercing:" + "" + piercing)))))
                pause(2000)
                story.printCharacterText("Charater 3 level: " + ("" + P3Level + (" Charater 3 XP:" + ("" + ExpP3 + "/" + Xp_per_level3 + ("     " + "piercing:" + "" + piercing)))))
            }
            Kills_per_round = 1
            info.startCountdown(20)
            HowManyPlayers()
            scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
            Game_Start = "Y"
            tiles.setCurrentTilemap(tilemap`level4`)
            tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(20, 20))
        }
    } else {
        forever2 = false
        Game_Start = "N"
        enemydeath = true
        map = 1
        achievements.create("Started Game!", 1, "GAME", img`
            ........................
            ........................
            ........................
            ........................
            .........fffff..........
            .......ffb1111ff........
            ......fb1111111bf.......
            ......f111111111f.......
            .....ffff1111111df......
            ....fb111c1dd111df......
            ....ffb1b1fdcf11bf......
            .....ffbfbfb11111f......
            ......ffffcfdb1b1f......
            .......fcccfcfbfbf......
            ........ffffffffff......
            .........ffffff.........
            .........ffffff.........
            .....f..fffffff.........
            .....fffffffff..........
            ......fffffff...........
            ........................
            ........................
            ........................
            ........................
            `)
        pause(3500)
        achievements.cancel()
        if (blockSettings.exists("Played")) {
            ExpP1 = blockSettings.readNumber("P1Exp")
            ExpP2 = blockSettings.readNumber("P2Exp")
            ExpP3 = blockSettings.readNumber("P3Exp")
            P1Level = blockSettings.readNumber("LevelP1")
            P2Level = blockSettings.readNumber("LevelP2")
            P3Level = blockSettings.readNumber("LevelP3")
            Xp_per_Level = blockSettings.readNumber("Xp_per_Level")
            EnemyAchievement = blockSettings.readNumber("EnemyAchievement")
            Xp_per_level2 = blockSettings.readNumber("Xp_per_Level2")
            Xp_per_level3 = blockSettings.readNumber("Xp_per_Level3")
        } else {
            P1Level = 1
            P2Level = 1
            P3Level = 1
            Xp_per_Level = 50
            Xp_per_level2 = 50
            Xp_per_level3 = 50
            EnemyAchievement = 0
        }
        pierce_upg_price = 10
        if (multiplayet == 1) {
            username = game.askForString("Username", 7)
        } else if (multiplayet == 2) {
            username = game.askForString("Username for player 1", 7)
            username2 = game.askForString("Username for player 2", 7)
        } else if (multiplayet == 3) {
            username = game.askForString("Username for player 1", 7)
            username2 = game.askForString("Username for player 2", 7)
            username3 = game.askForString("Username for player 3", 7)
        }
        music.play(music.stringPlayable("F C G F E A F D ", 133), music.PlaybackMode.LoopingInBackground)
        Difficulty = game.askForNumber("Difficulty select, 1-3", 1)
        Rounds = 1
        myMinimap = minimap.minimap(MinimapScale.Original, 2, 15)
        if (multiplayet == 1) {
            story.printCharacterText("Charater 1 Level: " + ("" + P1Level + (" Charater 1 XP: " + ("" + ExpP1 + "/" + Xp_per_Level + ("     " + "piercing:" + "" + piercing)))))
        } else if (multiplayet == 2) {
            story.printCharacterText("Charater 1 Level: " + ("" + P1Level + (" Charater 1 XP: " + ("" + ExpP1 + "/" + Xp_per_Level + ("     " + "piercing:" + "" + piercing)))))
            pause(2000)
            story.printCharacterText("Charater 2 level: " + ("" + P2Level + (" Charater 2 XP:" + ("" + ExpP2 + "/" + Xp_per_level2 + ("     " + "piercing:" + "" + piercing)))))
        } else if (multiplayet == 3) {
            story.printCharacterText("Charater 1 Level: " + ("" + P1Level + (" Charater 1 XP: " + ("" + ExpP1 + "/" + Xp_per_Level + ("     " + "piercing:" + "" + piercing)))))
            pause(2000)
            story.printCharacterText("Charater 2 level: " + ("" + P2Level + (" Charater 2 XP:" + ("" + ExpP2 + "/" + Xp_per_level2 + ("     " + "piercing:" + "" + piercing)))))
            pause(2000)
            story.printCharacterText("Charater 3 level: " + ("" + P3Level + (" Charater 3 XP:" + ("" + ExpP3 + "/" + Xp_per_level3 + ("     " + "piercing:" + "" + piercing)))))
        }
        Kills_per_round = Rounds
        info.startCountdown(20)
        HowManyPlayers()
        scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
        tiles.setCurrentTilemap(tilemap`level4`)
        Game_Start = "Y"
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Direction = "L"
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (map == 1) {
        tiles.setCurrentTilemap(tilemap`level`)
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(18, 9))
        scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
        map = 3
    } else if (map == 3) {
        tiles.setCurrentTilemap(tilemap`level4`)
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(2, 19))
        scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
        map = 1
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game_Start == "Y") {
        if (Vamperic != true) {
            if (statusbar.value != statusbar.max) {
                statusbar.value += 10
                statusbar2.value += -25
                scene.cameraShake(4, 500)
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    coins += 1
    statusbar2.value += 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    if (map == 1) {
        tiles.setCurrentTilemap(tilemap`level7`)
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(1, 12))
        scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
        map = 2
    } else if (map == 0) {
        tiles.setCurrentTilemap(tilemap`level4`)
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(1, 37))
        scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
        map = 1
    }
})
// rubric #1 & #2
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    if (map == 1) {
        tiles.setCurrentTilemap(tilemap`level8`)
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(15, 2))
        scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
        map = 0
    } else if (map == 2) {
        tiles.setCurrentTilemap(tilemap`level4`)
        tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(38, 2))
        scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
        map = 1
    }
})
let projectile: Sprite = null
let multiplier_price = 0
let LevelupREQ = 0
let Levelscaling = 0
let coins = 0
let myMinimap: minimap.Minimap = null
let pierce_upg_price = 0
let imageArray: Image[] = []
let LevelAchievement = false
let map2 = false
let enemydeath = false
let DinoBoss: Sprite = null
let katana: Sprite = null
let Game_Start = ""
let Direction = ""
let statusbar3: StatusBarSprite = null
let username3 = ""
let username2 = ""
let forever2 = false
let username = ""
let player_follow = 0
let map = 0
let Ghost_Zombie: Sprite = null
let Difficulty = 0
let roundPlay = false
let boss_active = 0
let TimesPlayed = 0
let coinSprite: Sprite = null
let EnemyAchievement = 0
let piercing3 = 0
let katana3: Sprite = null
let coins2 = 0
let piercing2 = 0
let statusbar6: StatusBarSprite = null
let katana2: Sprite = null
let cooldown = 0
let TankHeal = false
let Direction2 = ""
let coins3 = 0
let Direction3 = ""
let piercing = 0
let Rounds = 0
let HacksONOff = false
let Xp_per_level3 = 0
let ExpP3 = 0
let statusbar12: StatusBarSprite = null
let P3Level = 0
let statusbar11: StatusBarSprite = null
let statusbar10: StatusBarSprite = null
let Xp_per_level2 = 0
let ExpP2 = 0
let statusbar8: StatusBarSprite = null
let P2Level = 0
let statusbar7: StatusBarSprite = null
let statusbar9: StatusBarSprite = null
let Xp_per_Level = 0
let ExpP1 = 0
let statusbar5: StatusBarSprite = null
let P1Level = 0
let statusbar2: StatusBarSprite = null
let multiplayet = 0
let Kills_per_round = 0
let statusbar: StatusBarSprite = null
let Heal = 0
let Vamperic = false
play_game()
forever(function () {
    if (Rounds == 10) {
        roundPlay = false
        game.splash("BOSS FIGHT!")
        boss_active = 1
        DinoBoss = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c c . 
            . c b b c 5 5 b b d d d d c d c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c . 
            . . c c c c c b 5 5 b c c c . . 
            . . c b b b c d 5 5 b c . . . . 
            `, SpriteKind.zombieBoss)
        DinoBoss.changeScale(2, ScaleAnchor.Middle)
        if (map == 1) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`tile3`)
        } else if (map == 2) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`tile8`)
        } else if (map == 0) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`tile4`)
        } else if (map == 3) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`myTile1`)
        } else if (map == 4) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`myTile5`)
        }
        statusbar3 = statusbars.create(105, 4, StatusBarKind.EnemyHealth)
        statusbar3.value = 100
        statusbar3.setLabel("Boss HP:")
        statusbar3.setBarBorder(1, 15)
        statusbar3.setOffsetPadding(3, 2.5)
        statusbar3.positionDirection(CollisionDirection.Bottom)
        DinoBoss.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 40)
        pauseUntil(() => statusbar3.value <= 0)
        boss_active = 0
        Rounds += 1
    } else if (Rounds == 20) {
        roundPlay = false
        game.splash("BOSS FIGHT!")
        boss_active = 1
        DinoBoss = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c c . 
            . c b b c 5 5 b b d d d d c d c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c . 
            . . c c c c c b 5 5 b c c c . . 
            . . c b b b c d 5 5 b c . . . . 
            `, SpriteKind.zombieBoss)
        DinoBoss.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 40)
        if (map == 1) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`tile3`)
        } else if (map == 2) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`tile8`)
        } else if (map == 0) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`tile4`)
        } else if (map == 3) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`myTile1`)
        } else if (map == 4) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`myTile5`)
        }
        DinoBoss.changeScale(2, ScaleAnchor.Middle)
        statusbar3 = statusbars.create(105, 4, StatusBarKind.EnemyHealth)
        statusbar3.max = 500
        statusbar3.value = 500
        statusbar3.setLabel("Boss HP:")
        statusbar3.setBarBorder(1, 15)
        statusbar3.setOffsetPadding(3, 2.5)
        statusbar3.positionDirection(CollisionDirection.Bottom)
        pauseUntil(() => statusbar3.value <= 0)
        boss_active = 0
        Rounds += 1
    } else if (Rounds == 30) {
        roundPlay = false
        game.splash("BOSS FIGHT!")
        boss_active = 1
        DinoBoss = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c c . 
            . c b b c 5 5 b b d d d d c d c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c . 
            . . c c c c c b 5 5 b c c c . . 
            . . c b b b c d 5 5 b c . . . . 
            `, SpriteKind.zombieBoss)
        if (map == 1) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`tile3`)
        } else if (map == 2) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`tile8`)
        } else if (map == 0) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`tile4`)
        } else if (map == 3) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`myTile1`)
        } else if (map == 4) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`myTile5`)
        }
        DinoBoss.changeScale(2, ScaleAnchor.Middle)
        DinoBoss.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 40)
        statusbar3 = statusbars.create(105, 4, StatusBarKind.EnemyHealth)
        statusbar3.max = 1000
        statusbar3.value = 1000
        statusbar3.setLabel("Boss HP:")
        statusbar3.setBarBorder(1, 15)
        statusbar3.setOffsetPadding(3, 2.5)
        statusbar3.positionDirection(CollisionDirection.Bottom)
        pauseUntil(() => statusbar3.value <= 0)
        boss_active = 0
        Rounds += 1
    } else if (Rounds == 40) {
        roundPlay = false
        game.splash("BOSS FIGHT!")
        boss_active = 1
        DinoBoss = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c c . 
            . c b b c 5 5 b b d d d d c d c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c . 
            . . c c c c c b 5 5 b c c c . . 
            . . c b b b c d 5 5 b c . . . . 
            `, SpriteKind.zombieBoss)
        if (map == 1) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`tile3`)
        } else if (map == 2) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`tile8`)
        } else if (map == 0) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`tile4`)
        } else if (map == 3) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`myTile1`)
        } else if (map == 4) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`myTile5`)
        }
        DinoBoss.changeScale(2, ScaleAnchor.Middle)
        DinoBoss.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 40)
        statusbar3 = statusbars.create(105, 4, StatusBarKind.EnemyHealth)
        statusbar3.max = 3000
        statusbar3.value = 3000
        statusbar3.setLabel("Boss HP:")
        statusbar3.setBarBorder(1, 15)
        statusbar3.setOffsetPadding(3, 2.5)
        statusbar3.positionDirection(CollisionDirection.Bottom)
        pauseUntil(() => statusbar3.value <= 0)
        boss_active = 0
        Rounds += 1
    } else if (Rounds == 50) {
        roundPlay = false
        game.splash("Final boss")
        boss_active = 1
        DinoBoss = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c c . 
            . c b b c 5 5 b b d d d d c d c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c . 
            . . c c c c c b 5 5 b c c c . . 
            . . c b b b c d 5 5 b c . . . . 
            `, SpriteKind.zombieBoss)
        if (map == 1) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`tile3`)
        } else if (map == 2) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`tile8`)
        } else if (map == 0) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`tile4`)
        } else if (map == 3) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`myTile1`)
        } else if (map == 4) {
            tiles.placeOnRandomTile(DinoBoss, assets.tile`myTile5`)
        }
        DinoBoss.changeScale(2, ScaleAnchor.Middle)
        DinoBoss.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 40)
        statusbar3 = statusbars.create(105, 4, StatusBarKind.EnemyHealth)
        statusbar3.max = 60000
        statusbar3.value = 60000
        statusbar3.setLabel("Boss HP:")
        statusbar3.setBarBorder(1, 15)
        statusbar3.setOffsetPadding(3, 2.5)
        statusbar3.positionDirection(CollisionDirection.Bottom)
        pauseUntil(() => statusbar3.value <= 0)
        boss_active = 0
        Rounds += 1
    } else {
        summon_enemys()
    }
    if (forever2 == false) {
        if (Difficulty == 1) {
            if (Rounds == 51) {
                game.splash("You Beat the final boss", "HACKS: " + HacksONOff)
                game.gameOver(true)
            }
        } else if (Difficulty == 2) {
            if (Rounds == 100) {
                game.splash("You Beat the final boss", "HACKS: " + HacksONOff + "")
                game.gameOver(true)
            }
        } else if (Difficulty == 3) {
            if (Rounds == 150) {
                game.splash("You Beat the final boss", "HACKS: " + HacksONOff + "")
                game.gameOver(true)
            }
        }
    }
})
forever(function () {
    if (LevelAchievement == true) {
        if (P1Level == 100) {
            achievements.create("Lvl 100 boss", 1, "Game", img`
                ...........................cccccccccc..........................
                .........................ccc11111111ccc........................
                ........................cc111111111111cc.......................
                .......................cc11111111111111cc......................
                ......................cc1111111111111111cc.....................
                ......................c111111111111111111c.....................
                .....................cc111111111111111111cc....................
                .....................cc1111111111111111111c....................
                .....................c11111111111111111111c....................
                ....................cc11111111111111111111cc...................
                ....................cc11111111111111111111cc...................
                ....................cc111111111111111111111c...................
                ....................cc111111111111111111111c...................
                ....................cc111111111111111111111c...................
                ....................cc111111111111bcccc1111c...................
                ....................cc11111111111111ccc1111c...................
                .....................c11bcccc1111111cc11111c...................
                .....................cb111ccc1111111111111cc...................
                .....................cb111cc11111111111111cc...................
                .....................cb1111111111111b111ccccc..................
                ....................ccbb111111111111b11cc111cc.................
                ..................ccc11bb11111b1111b111c11111cc................
                ................cccdd111bb11111bbbb111b1111111ccccc............
                ...............cc111d1111bbb11111111bb1111bb111cc1cc...........
                ..............cc1111dd11111bbbbbbbbbbb1111bb111b111cc..........
                ..............c111111d11111111d11111bbb111bb11bb1111cc.........
                .............cc111111d11111111dd1111bb1b111b11b111111c.........
                ............cc111114441111111111ddddb11bbbb111b111111c.........
                ...........cc11111145411111111111111b11111111bb111111cc........
                ..........cc111111145411111111111111bb1111111bb1111111c........
                .........ccdd111111454111111111111111bb1111111bb111111cc.......
                ........cc111d1111145441111111111111111b1111111bb111111c.......
                .......cc11111d111d45541111111111111111bb1111111bb11111c.......
                .......c111111dd1ddd45411111111111111111bb1111111bbddd1cc......
                ......cc1111bbbbbddd454111111111111111111bb11111111bddd1c......
                ......cc11bbb111bbbd4541111111111111111111bb11111111111dcc.....
                ......cc11bb111bbbbc4541111111111111111111dbc11111111111cc.....
                ......cc11b111bb111bc5411111111111111111111dcc11111111111c.....
                bbbbbbcc111111b11111bc4cc111111111111111111ddcc1111111111c.....
                dddddddcc1111b111111bb11ccbbbbbbbb111111111dddcc11111111cc.....
                ddddddddcc111b1111111bb11cdddddddbbbbbbbbbbbbbccc111111cc......
                ddddddddddcccb11111111bbccbbddddddddddddddddddddccc111ccbbbbbbb
                ddddddddddddccc11111111bc111bbbddddddddddddddddddccccccdddddddd
                dddddddddddddccc1111111cc111111bbbddddddddddddddddddddddddddddd
                ddddddddddddbb11cc1111cc111111111bddddddddddddddddddddddddddddd
                ddddddddddbb11111cccccc111111111bdddddddddddddddddddddddddddddd
                ddddddddddb11111111111111111111bddddddddddddddddddddddddddddddd
                ddddddddddbb111111111111111111bdddddddddddddddddddddddddddddddd
                ddddddddddddbb111111111111111bddddddddddddddddddddddddddddddddd
                ddddddddddddddbb111111111111bdddddddddddddddddddddddddddddddddd
                ddddddddddddddddbb111111111bddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddbb111111bdddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddbb111bddddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                `)
            LevelAchievement = false
        }
        if (P2Level == 100) {
            achievements.create("Lvl 100 boss", 1, "Game", img`
                ...........................cccccccccc..........................
                .........................ccc11111111ccc........................
                ........................cc111111111111cc.......................
                .......................cc11111111111111cc......................
                ......................cc1111111111111111cc.....................
                ......................c111111111111111111c.....................
                .....................cc111111111111111111cc....................
                .....................cc1111111111111111111c....................
                .....................c11111111111111111111c....................
                ....................cc11111111111111111111cc...................
                ....................cc11111111111111111111cc...................
                ....................cc111111111111111111111c...................
                ....................cc111111111111111111111c...................
                ....................cc111111111111111111111c...................
                ....................cc111111111111bcccc1111c...................
                ....................cc11111111111111ccc1111c...................
                .....................c11bcccc1111111cc11111c...................
                .....................cb111ccc1111111111111cc...................
                .....................cb111cc11111111111111cc...................
                .....................cb1111111111111b111ccccc..................
                ....................ccbb111111111111b11cc111cc.................
                ..................ccc11bb11111b1111b111c11111cc................
                ................cccdd111bb11111bbbb111b1111111ccccc............
                ...............cc111d1111bbb11111111bb1111bb111cc1cc...........
                ..............cc1111dd11111bbbbbbbbbbb1111bb111b111cc..........
                ..............c111111d11111111d11111bbb111bb11bb1111cc.........
                .............cc111111d11111111dd1111bb1b111b11b111111c.........
                ............cc111114441111111111ddddb11bbbb111b111111c.........
                ...........cc11111145411111111111111b11111111bb111111cc........
                ..........cc111111145411111111111111bb1111111bb1111111c........
                .........ccdd111111454111111111111111bb1111111bb111111cc.......
                ........cc111d1111145441111111111111111b1111111bb111111c.......
                .......cc11111d111d45541111111111111111bb1111111bb11111c.......
                .......c111111dd1ddd45411111111111111111bb1111111bbddd1cc......
                ......cc1111bbbbbddd454111111111111111111bb11111111bddd1c......
                ......cc11bbb111bbbd4541111111111111111111bb11111111111dcc.....
                ......cc11bb111bbbbc4541111111111111111111dbc11111111111cc.....
                ......cc11b111bb111bc5411111111111111111111dcc11111111111c.....
                bbbbbbcc111111b11111bc4cc111111111111111111ddcc1111111111c.....
                dddddddcc1111b111111bb11ccbbbbbbbb111111111dddcc11111111cc.....
                ddddddddcc111b1111111bb11cdddddddbbbbbbbbbbbbbccc111111cc......
                ddddddddddcccb11111111bbccbbddddddddddddddddddddccc111ccbbbbbbb
                ddddddddddddccc11111111bc111bbbddddddddddddddddddccccccdddddddd
                dddddddddddddccc1111111cc111111bbbddddddddddddddddddddddddddddd
                ddddddddddddbb11cc1111cc111111111bddddddddddddddddddddddddddddd
                ddddddddddbb11111cccccc111111111bdddddddddddddddddddddddddddddd
                ddddddddddb11111111111111111111bddddddddddddddddddddddddddddddd
                ddddddddddbb111111111111111111bdddddddddddddddddddddddddddddddd
                ddddddddddddbb111111111111111bddddddddddddddddddddddddddddddddd
                ddddddddddddddbb111111111111bdddddddddddddddddddddddddddddddddd
                ddddddddddddddddbb111111111bddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddbb111111bdddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddbb111bddddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                `)
            LevelAchievement = false
        }
        if (P3Level == 100) {
            achievements.create("Lvl 100 boss", 1, "Game", img`
                ...........................cccccccccc..........................
                .........................ccc11111111ccc........................
                ........................cc111111111111cc.......................
                .......................cc11111111111111cc......................
                ......................cc1111111111111111cc.....................
                ......................c111111111111111111c.....................
                .....................cc111111111111111111cc....................
                .....................cc1111111111111111111c....................
                .....................c11111111111111111111c....................
                ....................cc11111111111111111111cc...................
                ....................cc11111111111111111111cc...................
                ....................cc111111111111111111111c...................
                ....................cc111111111111111111111c...................
                ....................cc111111111111111111111c...................
                ....................cc111111111111bcccc1111c...................
                ....................cc11111111111111ccc1111c...................
                .....................c11bcccc1111111cc11111c...................
                .....................cb111ccc1111111111111cc...................
                .....................cb111cc11111111111111cc...................
                .....................cb1111111111111b111ccccc..................
                ....................ccbb111111111111b11cc111cc.................
                ..................ccc11bb11111b1111b111c11111cc................
                ................cccdd111bb11111bbbb111b1111111ccccc............
                ...............cc111d1111bbb11111111bb1111bb111cc1cc...........
                ..............cc1111dd11111bbbbbbbbbbb1111bb111b111cc..........
                ..............c111111d11111111d11111bbb111bb11bb1111cc.........
                .............cc111111d11111111dd1111bb1b111b11b111111c.........
                ............cc111114441111111111ddddb11bbbb111b111111c.........
                ...........cc11111145411111111111111b11111111bb111111cc........
                ..........cc111111145411111111111111bb1111111bb1111111c........
                .........ccdd111111454111111111111111bb1111111bb111111cc.......
                ........cc111d1111145441111111111111111b1111111bb111111c.......
                .......cc11111d111d45541111111111111111bb1111111bb11111c.......
                .......c111111dd1ddd45411111111111111111bb1111111bbddd1cc......
                ......cc1111bbbbbddd454111111111111111111bb11111111bddd1c......
                ......cc11bbb111bbbd4541111111111111111111bb11111111111dcc.....
                ......cc11bb111bbbbc4541111111111111111111dbc11111111111cc.....
                ......cc11b111bb111bc5411111111111111111111dcc11111111111c.....
                bbbbbbcc111111b11111bc4cc111111111111111111ddcc1111111111c.....
                dddddddcc1111b111111bb11ccbbbbbbbb111111111dddcc11111111cc.....
                ddddddddcc111b1111111bb11cdddddddbbbbbbbbbbbbbccc111111cc......
                ddddddddddcccb11111111bbccbbddddddddddddddddddddccc111ccbbbbbbb
                ddddddddddddccc11111111bc111bbbddddddddddddddddddccccccdddddddd
                dddddddddddddccc1111111cc111111bbbddddddddddddddddddddddddddddd
                ddddddddddddbb11cc1111cc111111111bddddddddddddddddddddddddddddd
                ddddddddddbb11111cccccc111111111bdddddddddddddddddddddddddddddd
                ddddddddddb11111111111111111111bddddddddddddddddddddddddddddddd
                ddddddddddbb111111111111111111bdddddddddddddddddddddddddddddddd
                ddddddddddddbb111111111111111bddddddddddddddddddddddddddddddddd
                ddddddddddddddbb111111111111bdddddddddddddddddddddddddddddddddd
                ddddddddddddddddbb111111111bddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddbb111111bdddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddbb111bddddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                `)
            LevelAchievement = false
        }
    }
})
game.onUpdateInterval(100, function () {
    if (multiplayet == 1) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText(username)
    } else if (multiplayet == 2) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText(username)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).sayText(username2)
    } else if (multiplayet == 3) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText(username)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).sayText(username2)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).sayText(username3)
    }
    if (statusbar2.value != statusbar2.max) {
        statusbar2.value += 1.5
    }
})
forever(function () {
    characterAnimations.loopFrames(
    Ghost_Zombie,
    [img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff11111f........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fddd111111df......
        ......fdddd11111df......
        ......fddddddd11df......
        ......fddddddd111f......
        ......fddddddcf11f......
        .......fbdddb1111bf.....
        ........fffcfdb1b1f.....
        .......ffffffffbfbf.....
        ....ff.fffffffffff......
        .....ffffffff...........
        .....ffffffb1b1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......fd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fbddddbfd1df......
        ......fcbbbdcfddbf......
        .......fcbb11111f.......
        ........fffff1b1f.......
        ........fb111cfbf.......
        ........ffb1b1ff........
        ......f.fffbfbf.........
        ......ffffffff..........
        .......fffff............
        ........................
        ........................
        ........................
        ........................
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    Ghost_Zombie,
    [img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111df.......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd1dfbddddbf......
        ......fbddfcdbbbcf......
        .......f11111bbcf.......
        .......f1b1fffff........
        .......fbfc111bf........
        ........ff1b1bff........
        .........fbfbfff.f......
        ..........ffffffff......
        ............fffff.......
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        ........f11111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd111111dddf......
        ......fd11111ddddf......
        ......fd11dddddddf......
        ......f111dddddddf......
        ......f11fcddddddf......
        .....fb1111bdddbf.......
        .....f1b1bdfcfff........
        .....fbfbffffffff.......
        ......fffffffffff.ff....
        ...........ffffffff.....
        ........f1b1bffffff.....
        ........fbfbffffff......
        ........................
        ........................
        ........................
        ........................
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    Ghost_Zombie,
    [img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff11111f........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fddd111111df......
        ......fdddd11111df......
        ......fddddddd11df......
        ......fddddddd111f......
        ......fddddddcf11f......
        .......fbdddb1111bf.....
        ........fffcfdb1b1f.....
        .......ffffffffbfbf.....
        ....ff.fffffffffff......
        .....ffffffff...........
        .....ffffffb1b1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......fd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fbddddbfd1df......
        ......fcbbbdcfddbf......
        .......fcbb11111f.......
        ........fffff1b1f.......
        ........fb111cfbf.......
        ........ffb1b1ff........
        ......f.fffbfbf.........
        ......ffffffff..........
        .......fffff............
        ........................
        ........................
        ........................
        ........................
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
forever(function () {
    blockSettings.writeString("Played", "exists")
    blockSettings.writeNumber("P1Exp", ExpP1)
    blockSettings.writeNumber("P2Exp", ExpP2)
    blockSettings.writeNumber("P3Exp", ExpP3)
    blockSettings.writeNumber("LevelP1", P1Level)
    blockSettings.writeNumber("LevelP2", P2Level)
    blockSettings.writeNumber("LevelP3", P3Level)
    blockSettings.writeNumber("Xp_per_Level", Xp_per_Level)
    blockSettings.writeNumber("EnemyAchievement", EnemyAchievement)
    blockSettings.writeNumber("Xp_per_Level2", Xp_per_level2)
    blockSettings.writeNumber("Xp_per_Level3", Xp_per_level3)
    if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.One))) {
        Levelscaling = P1Level * 2
        LevelupREQ = Levelscaling * 100
        if (ExpP1 >= LevelupREQ) {
            LevelUp(Xp_per_Level, Xp_per_level2, Xp_per_level3)
        }
    } else if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
        Levelscaling = P2Level * 2
        LevelupREQ = Levelscaling * 100
        if (ExpP2 >= LevelupREQ) {
            LevelUp(Xp_per_Level, Xp_per_level2, Xp_per_level3)
        }
    } else {
        Levelscaling = P3Level * 2
        LevelupREQ = Levelscaling * 100
        if (ExpP3 >= LevelupREQ) {
            LevelUp(Xp_per_Level, Xp_per_level2, Xp_per_level3)
        }
    }
})
forever(function () {
    while (enemydeath == false) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    }
})
forever(function () {
    characterAnimations.loopFrames(
    DinoBoss,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c 5 5 5 f 1 5 5 5 5 5 c 
        . . . c 5 5 5 5 f f 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
        . . c d 5 5 5 5 5 5 b 1 b b c c 
        . . c d d d 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 5 5 5 b . 
        . c c d d d d b 5 5 c b b c . . 
        c d c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        . c d d d b 5 5 d c c c c . . . 
        . . c c c b 5 5 b c c c c c . . 
        . . . . c b 5 5 d c b b b c . . 
        `,img`
        . . . . . . . c c c c c . . . . 
        . . . . . . c 5 5 5 5 5 c c . . 
        . . . . . c 5 5 f 1 5 5 5 5 c . 
        . . . . c 5 5 5 f f 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 b 1 b b c c 
        . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 b 5 5 5 5 c . 
        . . c d d d d b 5 5 c b b c . . 
        c c c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        . c d d d b 5 5 b c c c . . . . 
        . . c c c b b 5 5 d c . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . . . . c b b b c . . . . 
        `,img`
        . . . . . . . c c c c c . . . . 
        . . . . . . c 5 5 5 5 5 c c . . 
        . . . . . c 5 5 f 1 5 5 5 5 c . 
        . . . . c 5 5 5 f f 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 b 1 b b c c 
        . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 5 5 5 5 c 
        . . c d d d 5 5 5 b 5 5 5 5 c . 
        . . c d d d d b 5 5 c b b c . . 
        c c c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        . c c d d d b 5 5 b c c . . . . 
        . . . c c c b b 5 5 d c . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . . . . c b b b c . . . . 
        `,img`
        . . . . . . . c c c c c . . . . 
        . . . . . . c 5 5 5 5 5 c c . . 
        . . . . . c 5 5 f 1 5 5 5 5 c . 
        . . . . c 5 5 5 f f 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 b 1 b b c c 
        . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 5 5 5 5 c 
        . . c d d d 5 5 5 b 5 5 5 5 c . 
        . . c d d d d b 5 5 c b b c . . 
        . c c d d d d b b 5 5 c b b c . 
        c c d d d d d d b b c c c c c . 
        c d d d d d 5 5 b 5 5 c c . . . 
        c c c c c c b b 5 5 b c . . . . 
        . . . . . . c c c c c c . . . . 
        . . . . . . c b b b c . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c 5 5 5 f 1 5 5 5 5 5 c 
        . . . c 5 5 5 5 f f 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 b 1 b b c c 
        . . c d 5 5 5 5 5 5 b b 3 3 c c 
        . . c d d d 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 5 5 5 b . 
        . . c d d d d b 5 5 c b b c . . 
        c c c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        c c d d d b 5 5 d c c c c . . . 
        . . c c c b 5 5 b c c b c . . . 
        . . . . . c b 5 5 d c c c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c 5 5 5 f 1 5 5 5 5 5 c 
        . . . c 5 5 5 5 f f 5 5 5 5 5 c 
        . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
        . . c d 5 5 5 5 5 5 b 1 b b c c 
        . . c d d d 5 5 5 5 5 3 3 3 5 c 
        . . c d d d 5 5 5 5 5 5 5 5 b . 
        . . c d d d d b 5 5 c b b c . . 
        c c c d d d d b b 5 5 c b b c . 
        c d d d d d d d d c c c c c c . 
        . c c d d b 5 5 d c c c c . . . 
        . . . c c b 5 5 c c c b b c . . 
        . . . . . c 5 5 d c c c c c . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    DinoBoss,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c c . 
        . c b b c 5 5 b b d d d d c d c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c . 
        . . c c c c c b 5 5 b c c c . . 
        . . c b b b c d 5 5 b c . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c 5 5 5 5 5 c . . . . . . 
        . c 5 5 5 5 1 f 5 5 c . . . . . 
        c 5 5 5 5 5 f f 5 5 5 c . . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 c . . . 
        c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . . c c c b 5 5 b d d d c . 
        . . . . . c d 5 5 b b c c c . . 
        . . . . c c c c c c c . . . . . 
        . . . . c b b b c . . . . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c 5 5 5 5 5 c . . . . . . 
        . c 5 5 5 5 1 f 5 5 c . . . . . 
        c 5 5 5 5 5 f f 5 5 5 c . . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 c . . . 
        c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
        c 5 5 5 5 5 5 5 5 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . . c c b 5 5 b d d d c c . 
        . . . . c d 5 5 b b c c c . . . 
        . . . . c c c c c c c . . . . . 
        . . . . c b b b c . . . . . . . 
        `,img`
        . . . . c c c c c . . . . . . . 
        . . c c 5 5 5 5 5 c . . . . . . 
        . c 5 5 5 5 1 f 5 5 c . . . . . 
        c 5 5 5 5 5 f f 5 5 5 c . . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 c . . . 
        c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
        c 5 5 5 5 5 5 5 5 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c . 
        . c c c c c b b d d d d d d c c 
        . . . c c 5 5 b 5 5 d d d d d c 
        . . . . c b 5 5 b b c c c c c c 
        . . . . c c c c c c . . . . . . 
        . . . . . c b b b c . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 c . . . 
        c c 3 3 b b 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c c 
        . . . c b c c b 5 5 b c c c . . 
        . . . c c c d 5 5 b c . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d c c . 
        . . c b b c c c 5 5 b c c . . . 
        . . c c c c c d 5 5 c . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
forever(function () {
    if (EnemyAchievement == 200) {
        achievements.create("Defender", 1, "GAME", img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f f f f d d d 4 e f . . . 
            . . f d d d d f 2 2 2 f e f . . 
            . . f b b b b f 2 2 2 f 4 e . . 
            . . f b b b b f 5 4 4 f . . . . 
            . . . f c c f f f f f f . . . . 
            . . . . f f . . . f f f . . . . 
            `)
        pause(5000)
        achievements.cancel()
        EnemyAchievement = 201
    }
})
forever(function () {
    multiplier_price = map + 1
})
forever(function () {
    if (multiplayet == 1) {
        statusbar5.value = ExpP1
        statusbar5.max = Xp_per_Level
    } else if (multiplayet == 2) {
        statusbar5.value = ExpP1
        statusbar5.max = Xp_per_Level
        statusbar8.value = ExpP2
        statusbar8.max = Xp_per_level2
    } else if (multiplayet == 3) {
        statusbar5.value = ExpP1
        statusbar5.max = Xp_per_Level
        statusbar8.value = ExpP2
        statusbar8.max = Xp_per_level2
        statusbar12.value = ExpP3
        statusbar12.max = Xp_per_level3
    }
})
forever(function () {
    if (multiplayet == 1) {
        if (Vamperic == true) {
        	
        } else {
            characterAnimations.loopFrames(
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
            [img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d e e e e e f . . . 
                . . . f e 4 e d d 4 f . . . . . 
                . . . f 2 2 e d d e f . . . . . 
                . . f f 5 5 f e e f f f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `,img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e d d 4 . . . . 
                . . . f 2 2 2 2 e d d e . . . . 
                . . f f 5 5 4 4 f e e f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `],
            100,
            characterAnimations.rule(Predicate.MovingLeft)
            )
            characterAnimations.loopFrames(
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
            [img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e e e d d d f . . . 
                . . . . . f 4 d d e 4 e f . . . 
                . . . . . f e d d e 2 2 f . . . 
                . . . . f f f e e f 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `,img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . 4 d d e 4 4 4 e f . . . 
                . . . . e d d e 2 2 2 2 f . . . 
                . . . . f e e f 4 4 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `],
            100,
            characterAnimations.rule(Predicate.MovingRight)
            )
            characterAnimations.loopFrames(
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . . f e 4 d d d d 4 e f e . . 
                . . f e f 2 2 2 2 e d d 4 e . . 
                . . e 4 f 2 2 2 2 e d d e . . . 
                . . . . f 4 4 5 5 f e e . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f e e 2 2 2 2 2 2 e f f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . e f e 4 d d d d 4 e f . . . 
                . . e 4 d d e 2 2 2 2 f e f . . 
                . . . e d d e 2 2 2 2 f 4 e . . 
                . . . . e e f 5 5 4 4 f . . . . 
                . . . . . f f f f f f f . . . . 
                . . . . . . . . . f f f . . . . 
                `],
            100,
            characterAnimations.rule(Predicate.MovingDown)
            )
            characterAnimations.loopFrames(
            mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f f 2 f e f . . 
                . . f f f 2 f e e 2 2 f f f . . 
                . . f e 2 f f e e 2 f e e f . . 
                . f f e f f e e e f e e e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . . e f f f f f f f f 4 e . . 
                . . . 4 f 2 2 2 2 2 e d d 4 . . 
                . . . e f f f f f f e e 4 . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e f 2 f f f 2 f 2 e f . . 
                . . f f f 2 2 e e f 2 f f f . . 
                . . f e e f 2 e e f f 2 e f . . 
                . f f e e e f e e e f f e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f e . . . 
                . . 4 d d e 2 2 2 2 2 f 4 . . . 
                . . . 4 e e f f f f f f e . . . 
                . . . . . . . . . f f f . . . . 
                `],
            100,
            characterAnimations.rule(Predicate.MovingUp)
            )
        }
    }
    if (multiplayet == 2) {
        characterAnimations.loopFrames(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingDown)
        )
        characterAnimations.loopFrames(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f f 2 f e f . . 
            . . f f f 2 f e e 2 2 f f f . . 
            . . f e 2 f f e e 2 f e e f . . 
            . f f e f f e e e f e e e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f 2 2 2 2 2 e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e f 2 f f f 2 f 2 e f . . 
            . . f f f 2 2 e e f 2 f f f . . 
            . . f e e f 2 e e f f 2 e f . . 
            . f f e e e f e e e f f e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f e . . . 
            . . 4 d d e 2 2 2 2 2 f 4 . . . 
            . . . 4 e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingUp)
        )
        characterAnimations.loopFrames(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        [img`
            . . f 4 4 f f f f . . . . . . . 
            . f 4 5 5 4 5 f b f f . . . . . 
            . f 5 5 5 5 4 e 3 3 b f . . . . 
            . f e 4 4 4 e 3 3 3 3 b f . . . 
            . f 3 3 3 3 3 3 3 3 3 3 f . . . 
            f 3 3 e e 3 b e 3 3 3 3 f . . . 
            f 3 3 e e e f f 3 3 3 3 f . . . 
            f 3 e e e f b f b b b b f . . . 
            . f e 4 4 f 1 e b b b b f . . . 
            . . f 4 4 4 4 f b b b b f f . . 
            . . f e e e f f f b b b b f . . 
            . . f d d d e 4 4 f b b f . . . 
            . . f d d d e 4 4 e f f . . . . 
            . f b d b d b e e b f . . . . . 
            . f f 1 d 1 d 1 d f f . . . . . 
            . . . f f b b f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . f 4 4 f f f f . . . . . . . 
            . f 4 5 5 4 5 f b f f . . . . . 
            . f 5 5 5 5 4 e 3 3 b f . . . . 
            . f e 4 4 4 e 3 3 3 3 b f . . . 
            f 3 3 3 3 3 3 3 3 3 3 3 f . . . 
            f 3 3 e e 3 b e 3 3 3 3 f . . . 
            f 3 3 e e e f f 3 3 3 3 f . . . 
            . f e e e f b f b b b b f f . . 
            . . e 4 4 f 1 e b b b b b f . . 
            . . f 4 4 4 4 f b b b b b f . . 
            . . f d d d e 4 4 b b b f . . . 
            . . f d d d e 4 4 f f f . . . . 
            . f d d d b b e e b b f . . . . 
            . f b d 1 d 1 d d b f . . . . . 
            . . f f f b b f f f . . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        [img`
            . . . . . f f f f 4 4 f . . . . 
            . . . f f b f 5 4 5 5 4 f . . . 
            . . f b 3 3 e 4 5 5 5 5 f . . . 
            . f b 3 3 3 3 e 4 4 4 e f . . . 
            . f 3 3 3 3 3 3 3 3 3 3 f . . . 
            . f 3 3 3 3 e b 3 e e 3 3 f . . 
            . f 3 3 3 3 f f e e e 3 3 f . . 
            . f b b b b f b f e e e 3 f . . 
            . f b b b b e 1 f 4 4 e f . . . 
            f f b b b b f 4 4 4 4 f . . . . 
            f b b b b f f f e e e f . . . . 
            . f b b f 4 4 e d d d f . . . . 
            . . f f e 4 4 e d d d f . . . . 
            . . . f b e e b d b d b f . . . 
            . . . f f d 1 d 1 d 1 f f . . . 
            . . . . . f f b b f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f 4 4 f . . . . 
            . . . f f b f 5 4 5 5 4 f . . . 
            . . f b 3 3 e 4 5 5 5 5 f . . . 
            . f b 3 3 3 3 e 4 4 4 e f . . . 
            . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 3 3 e b 3 e e 3 3 f . . 
            . f 3 3 3 3 f f e e e 3 3 f . . 
            f f b b b b f b f e e e f . . . 
            f b b b b b e 1 f 4 4 e . . . . 
            f b b b b b f 4 4 4 4 f . . . . 
            . f b b b 4 4 e d d d f . . . . 
            . . f f f 4 4 e d d d f . . . . 
            . . f b b e e b b d d d f . . . 
            . . . f b d d 1 d 1 d b f . . . 
            . . . . f f f b b f f f . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        [img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f 3 3 f f e e e e f f 3 3 f . 
            . f b b f b f e e f b f b b f . 
            . f b b e 1 f 4 4 f 1 e b b f . 
            f f b b f 4 4 4 4 4 4 f b b f f 
            f b b f f f e e e e f f f b b f 
            . f e e f b d d d d b f e e f . 
            . . e 4 c d d d d d d c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . f e 3 3 3 3 3 3 3 3 3 3 e f . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f b 3 f f e e e e f f 3 b f . 
            f f b b f b f e e f b f b b f f 
            f b b b e 1 f 4 4 f 1 e b b b f 
            . f b b e e 4 4 4 4 4 f b b f . 
            . . f 4 4 4 e d d d b f e f . . 
            . . f e 4 4 e d d d d c 4 e . . 
            . . . f e e d d b d b b f e . . 
            . . . f f 1 d 1 d 1 1 f f . . . 
            . . . . . f f f b b f . . . . . 
            `,img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f 3 3 f f e e e e f f 3 3 f . 
            . f b b f b f e e f b f b b f . 
            . f b b e 1 f 4 4 f 1 e b b f . 
            f f b b f 4 4 4 4 4 4 f b b f f 
            f b b f f f e e e e f f f b b f 
            . f e e f b d d d d b f e e f . 
            . . e 4 c d d d d d d c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . f e 3 3 3 3 3 3 3 3 3 3 e f . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f b 3 f f e e e e f f 3 b f . 
            f f b b f b f e e f b f b b f f 
            f b b b e 1 f 4 4 f 1 e b b b f 
            . f b b f 4 4 4 4 4 e e b b f . 
            . . f e f b d d d e 4 4 4 f . . 
            . . e 4 c d d d d e 4 4 e f . . 
            . . e f b b d b d d e e f . . . 
            . . . f f 1 1 d 1 d 1 f f . . . 
            . . . . . f b b f f f . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingDown)
        )
        characterAnimations.loopFrames(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        [img`
            .....ff44ff.........
            ....f545545f........
            ...fe333333ef.......
            ..fb33333333bf......
            ..f3333333333f......
            .f333333333333f.....
            .fb3333333333bf.....
            .fbb33333333bbf.....
            .fbbbbbbbbbbbbf.....
            fcbbbbbbbbbbbbcf....
            fbbbbbbbbbbbbbbf....
            .fccbbbbbbbbccf.....
            ..e4cffffffc4e......
            ..efbdbdbdbbfe......
            ...ff1d1d1dff.......
            .....ffbbff.........
            `,img`
            ....................
            .....ff44ff.........
            ....f545545f........
            ...fe333333ef.......
            ..fb33333333bf......
            ..f3333333333f......
            .fb3333333333bf.....
            .fbb33333333bbf.....
            .fbbbbbbbbbbbbf.....
            fcbbbbbbbbbbbbf.....
            fbbbbbbbbbbbbcf.....
            ffbbbbbbbbbbcf......
            .fcccfffffffec......
            ...fbbdbdde44e......
            ...ff11d1deef.......
            .....fbbfff.........
            `,img`
            .....ff44ff.........
            ....f545545f........
            ...fe333333ef.......
            ..fb33333333bf......
            ..f3333333333f......
            .f333333333333f.....
            .fb3333333333bf.....
            .fbb33333333bbf.....
            .fbbbbbbbbbbbbf.....
            fcbbbbbbbbbbbbcf....
            fbbbbbbbbbbbbbbf....
            .fccbbbbbbbbccf.....
            ..e4cffffffc4e......
            ..efbdbdbdbbfe......
            ...ff1d1d1dff.......
            .....ffbbff.........
            `,img`
            ....................
            ....ff44ff..........
            ...f545545f.........
            ..fe333333ef........
            .fb33333333bf.......
            .f3333333333f.......
            fb3333333333bf......
            fbb33333333bbf......
            fbbbbbbbbbbbbf......
            fbbbbbbbbbbbbcf.....
            fcbbbbbbbbbbbbf.....
            .fcbbbbbbbbbbff.....
            .cefffffffcccf......
            .e44eddbdbbf........
            ..feed1d11ff........
            ....fffbbf..........
            `],
        100,
        characterAnimations.rule(Predicate.MovingUp)
        )
    }
    if (multiplayet == 3) {
        characterAnimations.loopFrames(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingDown)
        )
        characterAnimations.loopFrames(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f f 2 f e f . . 
            . . f f f 2 f e e 2 2 f f f . . 
            . . f e 2 f f e e 2 f e e f . . 
            . f f e f f e e e f e e e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f 2 2 2 2 2 e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e f 2 f f f 2 f 2 e f . . 
            . . f f f 2 2 e e f 2 f f f . . 
            . . f e e f 2 e e f f 2 e f . . 
            . f f e e e f e e e f f e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f e . . . 
            . . 4 d d e 2 2 2 2 2 f 4 . . . 
            . . . 4 e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingUp)
        )
        characterAnimations.loopFrames(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        [img`
            . . f 4 4 f f f f . . . . . . . 
            . f 4 5 5 4 5 f b f f . . . . . 
            . f 5 5 5 5 4 e 3 3 b f . . . . 
            . f e 4 4 4 e 3 3 3 3 b f . . . 
            . f 3 3 3 3 3 3 3 3 3 3 f . . . 
            f 3 3 e e 3 b e 3 3 3 3 f . . . 
            f 3 3 e e e f f 3 3 3 3 f . . . 
            f 3 e e e f b f b b b b f . . . 
            . f e 4 4 f 1 e b b b b f . . . 
            . . f 4 4 4 4 f b b b b f f . . 
            . . f e e e f f f b b b b f . . 
            . . f d d d e 4 4 f b b f . . . 
            . . f d d d e 4 4 e f f . . . . 
            . f b d b d b e e b f . . . . . 
            . f f 1 d 1 d 1 d f f . . . . . 
            . . . f f b b f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . f 4 4 f f f f . . . . . . . 
            . f 4 5 5 4 5 f b f f . . . . . 
            . f 5 5 5 5 4 e 3 3 b f . . . . 
            . f e 4 4 4 e 3 3 3 3 b f . . . 
            f 3 3 3 3 3 3 3 3 3 3 3 f . . . 
            f 3 3 e e 3 b e 3 3 3 3 f . . . 
            f 3 3 e e e f f 3 3 3 3 f . . . 
            . f e e e f b f b b b b f f . . 
            . . e 4 4 f 1 e b b b b b f . . 
            . . f 4 4 4 4 f b b b b b f . . 
            . . f d d d e 4 4 b b b f . . . 
            . . f d d d e 4 4 f f f . . . . 
            . f d d d b b e e b b f . . . . 
            . f b d 1 d 1 d d b f . . . . . 
            . . f f f b b f f f . . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        [img`
            . . . . . f f f f 4 4 f . . . . 
            . . . f f b f 5 4 5 5 4 f . . . 
            . . f b 3 3 e 4 5 5 5 5 f . . . 
            . f b 3 3 3 3 e 4 4 4 e f . . . 
            . f 3 3 3 3 3 3 3 3 3 3 f . . . 
            . f 3 3 3 3 e b 3 e e 3 3 f . . 
            . f 3 3 3 3 f f e e e 3 3 f . . 
            . f b b b b f b f e e e 3 f . . 
            . f b b b b e 1 f 4 4 e f . . . 
            f f b b b b f 4 4 4 4 f . . . . 
            f b b b b f f f e e e f . . . . 
            . f b b f 4 4 e d d d f . . . . 
            . . f f e 4 4 e d d d f . . . . 
            . . . f b e e b d b d b f . . . 
            . . . f f d 1 d 1 d 1 f f . . . 
            . . . . . f f b b f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f 4 4 f . . . . 
            . . . f f b f 5 4 5 5 4 f . . . 
            . . f b 3 3 e 4 5 5 5 5 f . . . 
            . f b 3 3 3 3 e 4 4 4 e f . . . 
            . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 3 3 e b 3 e e 3 3 f . . 
            . f 3 3 3 3 f f e e e 3 3 f . . 
            f f b b b b f b f e e e f . . . 
            f b b b b b e 1 f 4 4 e . . . . 
            f b b b b b f 4 4 4 4 f . . . . 
            . f b b b 4 4 e d d d f . . . . 
            . . f f f 4 4 e d d d f . . . . 
            . . f b b e e b b d d d f . . . 
            . . . f b d d 1 d 1 d b f . . . 
            . . . . f f f b b f f f . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        [img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f 3 3 f f e e e e f f 3 3 f . 
            . f b b f b f e e f b f b b f . 
            . f b b e 1 f 4 4 f 1 e b b f . 
            f f b b f 4 4 4 4 4 4 f b b f f 
            f b b f f f e e e e f f f b b f 
            . f e e f b d d d d b f e e f . 
            . . e 4 c d d d d d d c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . f e 3 3 3 3 3 3 3 3 3 3 e f . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f b 3 f f e e e e f f 3 b f . 
            f f b b f b f e e f b f b b f f 
            f b b b e 1 f 4 4 f 1 e b b b f 
            . f b b e e 4 4 4 4 4 f b b f . 
            . . f 4 4 4 e d d d b f e f . . 
            . . f e 4 4 e d d d d c 4 e . . 
            . . . f e e d d b d b b f e . . 
            . . . f f 1 d 1 d 1 1 f f . . . 
            . . . . . f f f b b f . . . . . 
            `,img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f 3 3 f f e e e e f f 3 3 f . 
            . f b b f b f e e f b f b b f . 
            . f b b e 1 f 4 4 f 1 e b b f . 
            f f b b f 4 4 4 4 4 4 f b b f f 
            f b b f f f e e e e f f f b b f 
            . f e e f b d d d d b f e e f . 
            . . e 4 c d d d d d d c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . f e 3 3 3 3 3 3 3 3 3 3 e f . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f b 3 f f e e e e f f 3 b f . 
            f f b b f b f e e f b f b b f f 
            f b b b e 1 f 4 4 f 1 e b b b f 
            . f b b f 4 4 4 4 4 e e b b f . 
            . . f e f b d d d e 4 4 4 f . . 
            . . e 4 c d d d d e 4 4 e f . . 
            . . e f b b d b d d e e f . . . 
            . . . f f 1 1 d 1 d 1 f f . . . 
            . . . . . f b b f f f . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingDown)
        )
        characterAnimations.loopFrames(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        [img`
            .....ff44ff.........
            ....f545545f........
            ...fe333333ef.......
            ..fb33333333bf......
            ..f3333333333f......
            .f333333333333f.....
            .fb3333333333bf.....
            .fbb33333333bbf.....
            .fbbbbbbbbbbbbf.....
            fcbbbbbbbbbbbbcf....
            fbbbbbbbbbbbbbbf....
            .fccbbbbbbbbccf.....
            ..e4cffffffc4e......
            ..efbdbdbdbbfe......
            ...ff1d1d1dff.......
            .....ffbbff.........
            `,img`
            ....................
            .....ff44ff.........
            ....f545545f........
            ...fe333333ef.......
            ..fb33333333bf......
            ..f3333333333f......
            .fb3333333333bf.....
            .fbb33333333bbf.....
            .fbbbbbbbbbbbbf.....
            fcbbbbbbbbbbbbf.....
            fbbbbbbbbbbbbcf.....
            ffbbbbbbbbbbcf......
            .fcccfffffffec......
            ...fbbdbdde44e......
            ...ff11d1deef.......
            .....fbbfff.........
            `,img`
            .....ff44ff.........
            ....f545545f........
            ...fe333333ef.......
            ..fb33333333bf......
            ..f3333333333f......
            .f333333333333f.....
            .fb3333333333bf.....
            .fbb33333333bbf.....
            .fbbbbbbbbbbbbf.....
            fcbbbbbbbbbbbbcf....
            fbbbbbbbbbbbbbbf....
            .fccbbbbbbbbccf.....
            ..e4cffffffc4e......
            ..efbdbdbdbbfe......
            ...ff1d1d1dff.......
            .....ffbbff.........
            `,img`
            ....................
            ....ff44ff..........
            ...f545545f.........
            ..fe333333ef........
            .fb33333333bf.......
            .f3333333333f.......
            fb3333333333bf......
            fbb33333333bbf......
            fbbbbbbbbbbbbf......
            fbbbbbbbbbbbbcf.....
            fcbbbbbbbbbbbbf.....
            .fcbbbbbbbbbbff.....
            .cefffffffcccf......
            .e44eddbdbbf........
            ..feed1d11ff........
            ....fffbbf..........
            `],
        100,
        characterAnimations.rule(Predicate.MovingUp)
        )
        characterAnimations.loopFrames(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
        [img`
            . . . . . f f f f f . . . . . . 
            . . . f f f f f f f f f . . . . 
            . . f f f c f f f f f f . . . . 
            . . f f c f f f c f f f f . . . 
            f f c c f f f c c f f c f . . . 
            f f f f f e f f f f c c f . . . 
            . f f f e e f f f f f f f . . . 
            . . f f e e f b f e e f f . . . 
            . . . f 4 4 f 1 e 4 e f . . . . 
            . . . f 4 4 4 4 e f f f . . . . 
            . . . f f e e e e e f . . . . . 
            . . . f 7 7 7 e 4 4 e . . . . . 
            . . . f 7 7 7 e 4 4 e . . . . . 
            . . . f 6 6 6 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f f f f f f f f f . . . . 
            . . f f f c f f f f f f . . . . 
            . f f f c f f f c f f f f . . . 
            f f c c f f f c c f f c f . . . 
            f f f f f e f f f f c c f . . . 
            . f f f e e f f f f f f f . . . 
            . . f f e e f b f e e f f . . . 
            . . f f 4 4 f 1 e 4 e f . . . . 
            . . . f 4 4 4 e e f f f . . . . 
            . . . f f e e 4 4 e f . . . . . 
            . . . f 7 7 e 4 4 e f . . . . . 
            . . f f 6 6 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f f f f f f f f f . . . . 
            . . f f f c f f f f f f . . . . 
            . f f f c f f f c f f f f . . . 
            f f c c f f f c c f f c f . . . 
            f f f f f e f f f f c c f . . . 
            . f f f e e f f f f f f f . . . 
            . f f f e e f b f e e f f . . . 
            . . f f 4 4 f 1 e 4 e f f . . . 
            . . . f 4 4 4 4 e f f f . . . . 
            . . . f f e e e e 4 4 4 . . . . 
            . . . f 7 7 7 7 e 4 4 e . . . . 
            . . f f 6 6 6 6 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
        [img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f f f f f f c f f f . . . . . 
            f f f f c f f f c f f f . . . . 
            f c f f c c f f f c c f f . . . 
            f c c f f f f e f f f f f . . . 
            f f f f f f f e e f f f . . . . 
            f f e e f b f e e f f f . . . . 
            f f e 4 e 1 f 4 4 f f . . . . . 
            . f f f e 4 4 4 4 f . . . . . . 
            . 4 4 4 e e e e f f . . . . . . 
            . e 4 4 e 7 7 7 7 f . . . . . . 
            . f e e f 6 6 6 6 f f . . . . . 
            . f f f f f f f f f f . . . . . 
            . . f f . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f f f f f f c f f f . . . . . 
            f f f f c f f f c f f f . . . . 
            f c f f c c f f f c c f f . . . 
            f c c f f f f e f f f f f . . . 
            f f f f f f f e e f f f . . . . 
            f f e e f b f e e f f . . . . . 
            . f e 4 e 1 f 4 4 f f . . . . . 
            . f f f e e 4 4 4 f . . . . . . 
            . . f e 4 4 e e f f . . . . . . 
            . . f e 4 4 e 7 7 f . . . . . . 
            . f f f e e f 6 6 f f . . . . . 
            . f f f f f f f f f f . . . . . 
            . . f f . . . f f f . . . . . . 
            `,img`
            . . . f f f f f . . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f f f f f f c f f f . . . . . 
            f f f f c f f f c f f . . . . . 
            f c f f c c f f f c c f f . . . 
            f c c f f f f e f f f f f . . . 
            f f f f f f f e e f f f . . . . 
            f f e e f b f e e f f . . . . . 
            . f e 4 e 1 f 4 4 f . . . . . . 
            . f f f e 4 4 4 4 f . . . . . . 
            . . f e e e e e f f . . . . . . 
            . . e 4 4 e 7 7 7 f . . . . . . 
            . . e 4 4 e 7 7 7 f . . . . . . 
            . . f e e f 6 6 6 f . . . . . . 
            . . . f f f f f f . . . . . . . 
            . . . . f f f . . . . . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
        [img`
            . . . . f f f f . . . . . . . . 
            . . f f f f f f f f . . . . . . 
            . f f f f f f c f f f . . . . . 
            f f f f f f c c f f f c . . . . 
            f f f c f f f f f f f c . . . . 
            c c c f f f e e f f c c . . . . 
            f f f f f e e f f c c f . . . . 
            f f f b f e e f b f f f . . . . 
            . f 4 1 f 4 4 f 1 4 f . . . . . 
            . f e 4 4 4 4 4 4 e f . . . . . 
            . f f f e e e e f f f . . . . . 
            f e f b 7 7 7 7 b f e f . . . . 
            e 4 f 7 7 7 7 7 7 f 4 e . . . . 
            e e f 6 6 6 6 6 6 f e e . . . . 
            . . . f f f f f f . . . . . . . 
            . . . f f . . f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f f f f f f f . . . . . 
            . . f f f f f f c f f f . . . . 
            f f f f f f f c c f f f c . . . 
            f f f f c f f f f f f f c . . . 
            . c c c f f f e e f f c c . . . 
            . f f f f f e e f f c c f . . . 
            . f f f b f e e f b f f f . . . 
            . f f 4 1 f 4 4 f 1 4 f f . . . 
            . . f e 4 4 4 4 4 e e f e . . . 
            . f e f b 7 7 7 e 4 4 4 e . . . 
            . e 4 f 7 7 7 7 e 4 4 e . . . . 
            . . . f 6 6 6 6 6 e e . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . f f f . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f . . . . . . . . 
            . . f f f f f f f f . . . . . . 
            . f f f c f f f f f f . . . . . 
            c f f f c c f f f f f f f . . . 
            c f f f f f f f c f f f f . . . 
            c c f f e e f f f c c c . . . . 
            f c c f f e e f f f f f . . . . 
            f f f b f e e f b f f f . . . . 
            f f 4 1 f 4 4 f 1 4 f f . . . . 
            e f e e 4 4 4 4 4 e f . . . . . 
            e 4 4 4 e 7 7 7 b f e f . . . . 
            . e 4 4 e 7 7 7 7 f 4 e . . . . 
            . . e e 6 6 6 6 6 f . . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . f f f . . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingDown)
        )
        characterAnimations.loopFrames(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
        [img`
            . . . . f f f f . . . . . . . . 
            . . f f c c c c f f . . . . . . 
            . f f c c c c c c f f . . . . . 
            f f c c c c c c c c f f . . . . 
            f f c c f c c c c c c f . . . . 
            f f f f f c c c f c c f . . . . 
            f f f f c c c f c c f f . . . . 
            f f f f f f f f f f f f . . . . 
            f f f f f f f f f f f f . . . . 
            . f f f f f f f f f f . . . . . 
            . f f f f f f f f f f . . . . . 
            f e f f f f f f f f e f . . . . 
            e 4 f 7 7 7 7 7 7 c 4 e . . . . 
            e e f 6 6 6 6 6 6 f e e . . . . 
            . . . f f f f f f . . . . . . . 
            . . . f f . . f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f c c c c f f . . . . . 
            . f f f c c c c c c f f . . . . 
            f f c c c c c c c c c f f . . . 
            f c c c c f c c c c c c f . . . 
            . f f f f c c c c f c c f . . . 
            . f f f f c c f c c c f f . . . 
            . f f f f f f f f f f f f . . . 
            . f f f f f f f f f f f f . . . 
            . . f f f f f f f f f f . . . . 
            . . e f f f f f f f f f . . . . 
            . . e f f f f f f f f e f . . . 
            . . 4 c 7 7 7 7 7 e 4 4 e . . . 
            . . e f f f f f f f e e . . . . 
            . . . f f f . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f c c c c f f . . . . . 
            . . f f c c c c c c f f . . . . 
            . f f f c c c c c c c f f . . . 
            f f f c c c c c c c c c f . . . 
            f f c c c f c c c c c c f . . . 
            . f f f f f c c c f c f f . . . 
            . f f f f c c f f c f f f . . . 
            . . f f f f f f f f f f f . . . 
            . . f f f f f f f f f f . . . . 
            . . f f f f f f f f f e . . . . 
            . f e f f f f f f f f e . . . . 
            . e 4 4 e 7 7 7 7 7 c 4 . . . . 
            . . e e f f f f f f f e . . . . 
            . . . . . . . . f f f . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingUp)
        )
    }
})
game.onUpdateInterval(1000, function () {
    if (Vamperic == true) {
        if (TankHeal == true) {
            if (statusbar.value != statusbar.max) {
                statusbar.value += 150
            }
        }
    }
    if (Vamperic != true) {
        if (statusbar.value != statusbar.max) {
            statusbar.value += 2
        }
    }
})
forever(function () {
    if (boss_active == 1) {
        info.changeCountdownBy(1)
        pause(1000)
    }
})
forever(function () {
    if (boss_active == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `, DinoBoss, 0, 0)
        projectile.setKind(SpriteKind.FireBall)
        projectile.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50)
        pause(2000)
        sprites.destroy(projectile, effects.disintegrate, 200)
    }
})
forever(function () {
    level_up2()
})
forever(function () {
    if (coins == pierce_upg_price) {
        coins = 0
        pierce_upg_price += 3 * multiplier_price
        piercing += 1
        multiplier_price += 1
    }
    if (coins2 == pierce_upg_price) {
        coins2 = 0
        pierce_upg_price += 3 * multiplier_price
        piercing2 += 1
        multiplier_price += 1
    }
    if (coins3 == pierce_upg_price) {
        coins3 = 0
        pierce_upg_price += 3 * multiplier_price
        piercing3 += 1
        multiplier_price += 1
    }
})
forever(function () {
    info.setScore(Rounds)
})
