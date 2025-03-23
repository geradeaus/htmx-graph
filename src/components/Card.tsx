import type { FC } from 'hono/jsx'

export const Card: FC = () => {

    const timestamp = new Date().toISOString()

    return (
        <div class="card text-bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header">{timestamp}</div>
            <div class="card-body">
                <h5 class="card-title">Yar Pirate</h5>
                <p class="card-text">Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</p>
            </div>
        </div>
    )

}
